import { TMap } from "../models/map";
import { Utils } from "./utils";

/**
 * API for fetching map data from Trackmania.io
 *
 * This module provides functions to fetch map details by ID.
 *
 * @example
 *
 * Map.fetch('mapId').then(map => {
 *     console.log(map);
 * });
 *
 */
export namespace Map {
	/**
	 * Fetches a map by its ID.
	 *
	 * @param id - The ID of the map to fetch.
	 *
	 * @example
	 *
	 * fetch('mapId').then(map => {
	 *     console.log(map);
	 * });
	 *
	 */
	export function fetch(id: string) {
		return Utils.fetchAndDecode(`https://trackmania.io/api/map/${id}`, TMap);
	}
}
