import { Type } from "@sinclair/typebox";
import { TCOTD } from "../models/cotd";
import { Utils } from "./utils";

/**
 * API for fetching COTD (Cup of the Day) data from Trackmania.io
 *
 * This module provides functions to fetch COTD competitions.
 *
 * @example
 *
 * COTD.fetch(0).then(cotd => {
 *     console.log(cotd);
 * });
 *
 */
export namespace COTD {
	/**
	 * Fetches recent COTD with paginated results.
	 *
	 * @param page - The page number for pagination (default is 0).
	 *
	 * @example
	 *
	 * fetch().then(cotd => {
	 *     console.log(cotd);
	 * });
	 *
	 */
	export function fetch(page = 0) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/cotd/${page}?platform=crossplay`,
			Type.Object({ competitions: Type.Array(TCOTD) }),
		);
	}
}
