import {
	type StaticDecode,
	type TArray,
	type TObject,
	Type,
} from "@sinclair/typebox";

import { Clean, Decode } from "@sinclair/typebox/value";

export type FetchFn = (
	input: string | URL | Request,
	init?: RequestInit,
) => Promise<Response>;

export let customFetch: FetchFn = fetch;
export let userAgent: string | null = null;

/**
 * Sets a custom fetch function to be used by the other modules.
 *
 * @param fetchVal - The custom fetch function to use.
 *
 * @example
 *
 * 

 * import { useCustomFetch } from "./api/utils";
 * import { fetch as tauriFetch } from "@tauri-apps/api/http";
 * 
 * // Set the custom fetch function to Tauri's fetch
 * useCustomFetch(tauriFetch);
 * 
 * // Now all API calls will use Tauri's fetch instead of the default fetch
 * Campaign.fetchSeason('101585').then(campaign => {
 *     console.log(campaign);
 * });
 */
export const useCustomFetch = (fetchVal: FetchFn) => {
	customFetch = fetchVal;
};

/**
 * Sets a custom user agent to be used by the other modules.
 *
 * @param userAgentVal - The custom user agent string to use.
 *
 * @example
 *
 * import { useUserAgent } from "./api/utils";
 *
 * // Set a custom user agent
 * useUserAgent("my-custom-user-agent/1.0");
 */
export const useUserAgent = (userAgentVal: string) => {
	userAgent = userAgentVal;
};

/**
 * Utility functions for fetching and decoding data from Trackmania.io API.
 *
 * This module provides a generic function to fetch data from a given URL
 *
 */
export namespace Utils {
	const TError = Type.Object({
		error: Type.String(),
	});

	/**
	 * Fetches data from a URL and decodes it using the provided schema.
	 *
	 * @param url - The URL to fetch data from.
	 * @param schema - The TypeBox schema to validate the fetched data.
	 * @param auth - Optional authorization token for the request.
	 *
	 */
	export async function fetchAndDecode<T extends TObject | TArray>(
		url: string,
		schema: T,
		auth?: string,
	) {
		const res = await customFetch(url, {
			headers: auth
				? [
						["Authorization", auth],
						["User-Agent", userAgent ?? "tmio-api-client"],
					]
				: [["User-Agent", userAgent ?? "tmio-api-client"]],
		});

		const json = await res.json();

		const data = Decode(Type.Union([schema, TError]), json);

		if ("error" in data) return { data: null, err: data.error as string };

		return {
			data: Clean(schema, data) as StaticDecode<T>,
			err: null,
		};
	}
}
