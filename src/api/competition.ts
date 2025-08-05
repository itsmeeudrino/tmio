import { Type } from "@sinclair/typebox";
import {
	TComp,
	TLeaderboardParticipant,
	TMatch,
	TPartialComp,
} from "../models/competition";
import { Utils } from "./utils";

/**
 * API for fetching competition data from Trackmania.io
 *
 * This module provides functions to fetch competition details, leaderboards, and matches.
 *
 * @example
 *
 * Competition.fetch(35190).then(comp => {
 *     console.log(comp);
 * });
 *
 * Competition.fetchCompetitions(0).then(comps => {
 *     console.log(comps);
 * });
 *
 * Competition.fetchLeaderboard(35190, 0).then(leaderboard => {
 *    console.log(leaderboard);
 * });
 *
 * Competition.fetchMatch(35190, 122423).then(match => {
 *   console.log(match);
 * });
 *
 */
export namespace Competition {
	/**
	 * Fetches a competition by its ID.
	 *
	 * @param id - The ID of the competition to fetch.
	 *
	 * @example
	 *
	 * fetch(35190).then(comp => {
	 *     console.log(comp);
	 * });
	 *
	 */
	export function fetch(id: number) {
		return Utils.fetchAndDecode(`https://trackmania.io/api/comp/${id}`, TComp);
	}

	/**
	 * Fetches a list of competitions with pagination.
	 *
	 * @param page - The page number for pagination (default is 0).
	 *
	 * @example
	 *
	 * fetchCompetitions(0).then(comps => {
	 *     console.log(comps);
	 * });
	 *
	 */
	export function fetchCompetitions(page: number) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/competitions/${page}`,
			Type.Object({
				page: Type.Number(),
				page_max: Type.Number(),
				competitions: Type.Array(TPartialComp),
			}),
		);
	}

	/**
	 * Fetches the leaderboard for a competition.
	 *
	 * @param id - The ID of the competition.
	 * @param page - The page number for pagination (default is 0).
	 *
	 * @example
	 *
	 * fetchLeaderboard(35190, 0).then(leaderboard => {
	 *     console.log(leaderboard);
	 * });
	 *
	 */
	export function fetchLeaderboard(id: number, page = 0) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/comp/${id}/leaderboard/${page}`,
			Type.Object({
				page: Type.Number(),
				participants: Type.Array(TLeaderboardParticipant),
			}),
		);
	}

	/**
	 * Fetches match details for a competition.
	 *
	 * @param id - The ID of the competition.
	 * @param match - The ID of the match to fetch.
	 * @param page - The page number for pagination (default is 0).
	 *
	 * @example
	 *
	 * fetchMatch(35190, 122423).then(match => {
	 *     console.log(match);
	 * });
	 *
	 */
	export function fetchMatch(id: number, match: number, page = 0) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/comp/${id}/match/${match}/${page}`,
			TMatch,
		);
	}
}
