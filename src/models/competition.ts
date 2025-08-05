import { Type } from "@sinclair/typebox";
import { TDateStamp } from "./campaign";
import { TPartialPlayer } from "./player";

export const TPartialComp = Type.Object({
	clubid: Type.Number(),
	competitionid: Type.Number(),
	creatorplayer: TPartialPlayer,
	latesteditorplayer: Type.Union([Type.Null(), TPartialPlayer]),
	id: Type.Number(),
	name: Type.String(),
	timestamp: TDateStamp,
});

const TRound = Type.Object({
	challenges: Type.Array(
		Type.Object({ id: Type.Number(), name: Type.String() }),
	),
	enddate: TDateStamp,
	id: Type.Number(),
	matches: Type.Array(
		Type.Object({
			completed: Type.Boolean(),
			id: Type.Number(),
			name: Type.String(),
		}),
	),
	name: Type.String(),
	startdate: TDateStamp,
	status: Type.Union([Type.Literal("COMPLETED"), Type.Literal("ONGOING")]),
});

export const TComp = Type.Object({
	clubid: Type.Optional(Type.Number()),
	clubname: Type.Optional(Type.String()),
	creatorplayer: TPartialPlayer,
	description: Type.String(),
	enddate: TDateStamp,
	id: Type.Number(),
	leaderboardid: Type.Number(),
	liveid: Type.String(),
	logourl: Type.String(),
	manialink: Type.String(),
	metadata: Type.Object({
		competitionid: Type.Number(),
		competitionmaps: Type.Union([
			Type.Null(),
			Type.Array(
				Type.Object({
					leaderboardgroupid: Type.String(),
					mapuid: Type.String(),
				}),
			),
		]),
		competitionname: Type.String(),
	}),
	name: Type.String(),
	numplayers: Type.Number(),
	registrationend: TDateStamp,
	registrationstart: TDateStamp,
	rounds: Type.Array(TRound),
});

export const TLeaderboardParticipant = Type.Object({
	player: TPartialPlayer,
	position: Type.Number(),
	score: Type.Number(),
});

const TMatchResult = Type.Object({
	player: TPartialPlayer,
	position: Type.Number(),
	score: Type.Number(),
});

export const TMatch = Type.Object({
	// TODO: other?
	unit: Type.Union([Type.Literal("point")]),
	results: Type.Array(TMatchResult),
});
