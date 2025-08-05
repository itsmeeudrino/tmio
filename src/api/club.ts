import { Type } from "@sinclair/typebox";
import { TClub } from "../models/club";
import { Utils } from "./utils";

/**
 * API for fetching club data from Trackmania.io
 *
 * This module provides functions to fetch club details and search for clubs.
 *
 * @example
 *
 * Clubs.fetch('150').then(club => {
 *     console.log(club);
 * });
 *
 * Clubs.search('arab league').then(clubs => {
 *     console.log(clubs);
 * });
 *
 */
export namespace Club {
	/**
	 * Fetches a club by its ID.
	 *
	 * @param id - The ID of the club to fetch.
	 *
	 * @example
	 *
	 * fetch('150').then(club => {
	 *     console.log(club);
	 * });
	 *
	 */
	export function fetch(id: string) {
		return Utils.fetchAndDecode(`https://trackmania.io/api/club/${id}`, TClub);
	}

	const TSearchRes = Type.Object({
		clubs: Type.Array(TClub),
		page: Type.Number(),
		pageCount: Type.Number(),
	});

	/**
	 * Searches for clubs by name.
	 *
	 * @param q - The search query for club names.
	 * @param page - The page number for pagination (default is 0).
	 *
	 * @example
	 *
	 * search('arab league').then(clubs => {
	 *     console.log(clubs);
	 * });
	 *
	 */
	export function search(q: string, page = 0) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/clubs/${page}?search=${q ?? ""}`,
			TSearchRes,
		);
	}
}
