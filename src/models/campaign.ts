import { type StaticDecode, Type } from "@sinclair/typebox";
import { TMap } from "./map";
import { TPartialPlayer } from "./player";

export const TDateStamp = Type.Transform(Type.Number())
	.Decode((ts) => new Date(ts))
	.Encode((date) => date.getTime());

export namespace Partial {
	export const TSeasonal = Type.Object({
		id: Type.Number(),
		mapcount: Type.Number(),
		name: Type.String(),
		seasonal: Type.Literal(true),
		timestamp: TDateStamp,
		tracked: Type.Boolean(),
	});

	export const TWeekly = Type.Object({
		id: Type.Number(),
		mapcount: Type.Number(),
		name: Type.String(),
		weekly: Type.Literal(true),
		timestamp: TDateStamp,
	});

	export const TClub = Type.Object({
		id: Type.Number(),
		mapcount: Type.Number(),
		name: Type.String(),
		timestamp: TDateStamp,
		clubid: Type.Number(),
		clubname: Type.String(),
		creatorplayer: TPartialPlayer,
		latesteditorplayer: TPartialPlayer,
		mediaurl: Type.Optional(Type.String()),
	});

	export const TCampaign = Type.Union([TSeasonal, TWeekly, TClub]);

	export namespace Types {
		export type Seasonal = StaticDecode<typeof TSeasonal>;
		export type Weekly = StaticDecode<typeof TWeekly>;
		export type Club = StaticDecode<typeof TClub>;
		export type Campaign = StaticDecode<typeof TCampaign>;
	}
}

export const TCampaign = Type.Object({
	clubid: Type.Number(),
	clubname: Type.Optional(Type.String()),
	creationtime: TDateStamp,
	id: Type.Number(),
	leaderboarduid: Type.String(),
	media: Type.String(),
	name: Type.String(),
	playlist: Type.Array(TMap),
	publishtime: TDateStamp,
	tracked: Type.Boolean(),
});
