import { Type } from "@sinclair/typebox";
import { TDateString, TPartialPlayer } from "./player";

const TRecord = Type.Object({
	filename: Type.String(),
	player: TPartialPlayer,
	position: Type.Number(),
	score: Type.Number(),
	time: Type.Number(),
	timestamp: TDateString,
	url: Type.String(),
});

export const TPersonalRecord = Type.Object({
	filename: Type.String(),
	rank: Type.Number(),
	rankexact: Type.Boolean(),
	removed: Type.Boolean(),
	respawnCount: Type.Number(),
	score: Type.Number(),
	time: Type.Number(),
	timestamp: TDateString,
	url: Type.String(),
});

export const TLeaderboard = Type.Object({
	lockedLeaderboard: Type.Boolean(),
	playercount: Type.Number(),
	tops: Type.Array(TRecord),
});
