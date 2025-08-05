import { Type } from "@sinclair/typebox";
import { TTOTD } from "../models/totd";
import { Utils } from "./utils";

/**
 * API for fetching TOTD (Track of the Day) data from Trackmania.io
 *
 * This module provides functions to fetch TOTD tracks.
 *
 * @example
 *
 * TOTD.fetch(0).then(totd => {
 *     console.log(totd);
 * });
 *
 */
export namespace TOTD {
	const TFetchRes = Type.Object({
		days: Type.Array(TTOTD),
		lastday: Type.Number(),
		month: Type.Number(),
		monthcount: Type.Number(),
		monthoffset: Type.Number(),
		year: Type.Number(),
	});

	/**
	 * Fetches TOTD tracks for a specific month.
	 *
	 * @param month - The month number (0 for current month, 1 for last month, etc.).
	 *
	 * @example
	 *
	 * fetch().then(totd => {
	 *     console.log(totd);
	 * });
	 *
	 */
	export function fetch(month = 0) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/totd/${month}`,
			TFetchRes,
		);
	}
}
