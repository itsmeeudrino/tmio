import { Type } from "@sinclair/typebox";
import { Partial, TCampaign } from "../models/campaign";
import { Utils } from "./utils";

/**
 * API for fetching campaign data from Trackmania.io
 *
 * This module provides functions to fetch seasonal, weekly, and club campaigns.
 *
 * @example
 *
 * Campaign.fetchSeason('101585').then(campaign => {
 *     console.log(campaign);
 * });
 *
 * Campaign.fetchWeeklyShort('105673').then(campaign => {
 *     console.log(campaign);
 * });
 *
 * Campaign.fetchClubCampaign(150, 68071).then(campaign => {
 *     console.log(campaign);
 * });
 *
 */

export namespace Campaign {
	/**
	 * Fetches a seasonal campaign by its ID.
	 *
	 * @param id - The ID of the seasonal campaign to fetch.
	 *
	 * @example
	 *
	 * fetchSeason('101585').then(campaign => {
	 *     console.log(campaign);
	 * });
	 *
	 */

	export function fetchSeason(id: string) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/campaign/seasonal/${id}`,

			TCampaign,
		);
	}

	const TSeasonsRes = Type.Object({
		page: Type.Number(),
		pageCount: Type.Number(),
		campaigns: Type.Array(Partial.TSeasonal),
	});

	/**
	 * Fetches all seasonal campaigns.
	 *
	 * @example
	 *
	 * fetchSeasons().then(seasons => {
	 *     console.log(seasons);
	 * });
	 *
	 */
	export function fetchSeasons() {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/campaigns/seasonal/0`,
			TSeasonsRes,
		);
	}

	/**
	 * Fetches a weekly campaign by its ID.
	 *
	 * @param id - The ID of the weekly campaign to fetch.
	 *
	 * @example
	 *
	 * fetchWeeklyShort('105673').then(campaign => {
	 *     console.log(campaign);
	 * });
	 *
	 */
	export function fetchWeeklyShort(id: string) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/campaign/weekly/${id}`,
			TCampaign,
		);
	}

	const TWeeklyRes = Type.Object({
		page: Type.Number(),
		pageCount: Type.Number(),
		campaigns: Type.Array(Partial.TWeekly),
	});

	/**
	 * Fetches all weekly campaigns.
	 *
	 * @example
	 *
	 * fetchWeeklyShorts().then(campaigns => {
	 *     console.log(campaigns);
	 * });
	 *
	 */
	export function fetchWeeklyShorts() {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/campaigns/weekly/0`,
			TWeeklyRes,
		);
	}

	/**
	 * Fetches a club campaign by its club ID and campaign ID.
	 *
	 * @param club - The ID of the club.
	 * @param id - The ID of the campaign.
	 *
	 * @example
	 *
	 * fetchClubCampaign(150, 68071).then(campaign => {
	 *     console.log(campaign);
	 * });
	 *
	 */
	export function fetchClubCampaign(club: number, id: number) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/campaign/${club}/${id}`,
			TCampaign,
		);
	}

	const TClubRes = Type.Object({
		page: Type.Number(),
		pageCount: Type.Number(),
		campaigns: Type.Array(Partial.TClub),
	});

	/**
	 * Fetches all club campaigns, optionally filtered by search term and paginated.
	 *
	 * @param search - Optional search term to filter club campaigns.
	 * @param page - The page number for pagination (default is 0).
	 *
	 * @example
	 *
	 * fetchClubCampaigns('tmal', 0).then(campaigns => {
	 *     console.log(campaigns);
	 * });
	 *
	 */
	export function fetchClubCampaigns(search?: string, page = 0) {
		return Utils.fetchAndDecode(
			`https://trackmania.io/api/campaigns/club/${page}?search=${search ?? ""}`,
			TClubRes,
		);
	}
}
