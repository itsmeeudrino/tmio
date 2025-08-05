import { Type } from "@sinclair/typebox";
import { TMap } from "./map";

export const TTOTD = Type.Object({
	campaignid: Type.Number(),
	leaderboarduid: Type.String(),
	map: TMap,
	monthday: Type.Number(),
	weekday: Type.Number(),
});
