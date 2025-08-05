import { Type } from "@sinclair/typebox";
import { TPartialPlayer, TPlayer } from "../models/player";
import { Utils } from "./utils";

/**
 * API for fetching player data from Trackmania.io
 *
 * This module provides functions to fetch player details and search for players.
 *
 * @example
 *
 * Players.fetch('123456').then(player => {
 *     console.log(player);
 * });
 *
 * Players.search('eudrino').then(players => {
 *     console.log(players);
 * });
 *
 */
export namespace Players {
	/**
	 * Fetches a player by their ID.
	 *
	 * @param id - The ID of the player to fetch.
	 *
	 * @example
	 *
	 * fetch('123456').then(player => {
	 *     console.log(player);
	 * });
	 *
	 */
	export function fetch(id: string) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/player/${id}`,
			TPlayer,
		);
	}

	const TSearchRes = Type.Array(
		Type.Object({
			player: TPartialPlayer,
		}),
	);

	/**
	 * Searches for players by name.
	 *
	 * @param q - The search query for player names.
	 * @param page - The page number for pagination (default is 0).
	 *
	 * @example
	 *
	 * search('eudrino').then(players => {
	 *     console.log(players);
	 * });
	 *
	 */
	export function search(q: string, page = 0) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/players/find?search=${q}&page=${page}`,
			TSearchRes,
		);
	}

	/**
	 * Fetches players by group type.
	 *
	 * @param group - The group type to fetch players from (e.g., "nadeo", "sponsor", "team").
	 *
	 * @example
	 *
	 * fetchGroup('nadeo').then(players => {
	 *     console.log(players);
	 * });
	 *
	 */
	export function fetchGroup(group: "nadeo" | "sponsor" | "team") {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/players/group/${group}`,
			TSearchRes,
		);
	}
}
