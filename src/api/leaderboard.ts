import { TLeaderboard, TPersonalRecord } from "../models/leaderboard";
import { Utils } from "./utils";

/**
 * API for fetching leaderboard data from Trackmania.io
 *
 * This module provides functions to fetch leaderboards and personal bests.
 *
 * @example
 *
 * Leaderboard.fetch('mapId', 'leaderboardId').then(leaderboard => {
 *     console.log(leaderboard);
 * });
 *
 * Leaderboard.fetchPersonalBest('mapId', 'leaderboardId', 'authToken').then(record => {
 *     console.log(record);
 * });
 *
 */
export namespace Leaderboard {
	/**
	 * Fetches a leaderboard for a specific map and leaderboard ID.
	 *
	 * @param map - The ID of the map to fetch the leaderboard for.
	 * @param id - The ID of the leaderboard to fetch.
	 * @param options - Optional parameters for pagination (offset and length).
	 *
	 * @example
	 *
	 * fetch('mapId', 'leaderboardId').then(leaderboard => {
	 *     console.log(leaderboard);
	 * });
	 *
	 */
	export function fetch(
		map: string,
		id: string,
		options: { offset: number; length: number } = { offset: 0, length: 100 },
	) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/leaderboard/${id}/${map}?offset=${options.offset}&length=${options.length}`,
			TLeaderboard,
		);
	}

	/**
	 * Fetches the leaderboard for a specific map.
	 *
	 * @param map - The ID of the map to fetch the leaderboard for.
	 * @param options - Optional parameters for pagination (offset and length).
	 *
	 * @example
	 *
	 * fetchMapLeaderboard('mapId').then(leaderboard => {
	 *     console.log(leaderboard);
	 * });
	 *
	 */
	export function fetchMapLeaderboard(
		map: string,
		options: { offset: number; length: number } = { offset: 0, length: 100 },
	) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/leaderboard/map/${map}?offset=${options.offset}&length=${options.length}`,
			TLeaderboard,
		);
	}

	/**
	 * Fetches the personal best for a specific map for the user.
	 *
	 * @param map - The ID of the map to fetch the personal best for.
	 * @param id - The ID of the player to fetch the personal best for.
	 * @param auth - The authentication token for the request (obtained from Trackmania.io).
	 *
	 * @example
	 *
	 * fetchPersonalBest('mapId', 'playerId', 'authToken').then(record => {
	 *     console.log(record);
	 * });
	 *
	 */
	export function fetchPersonalBest(map: string, id: string, auth: string) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/leaderboard/personal/${id}/${map}`,
			TPersonalRecord,
			auth,
		);
	}
}
