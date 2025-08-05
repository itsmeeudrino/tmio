import { type StaticDecode, Type } from "@sinclair/typebox";

const TDivision = Type.Object({
	maxpoints: Type.Number(),
	minpoints: Type.Number(),
	position: Type.Number(),

	// TODO: any other rules?
	rule: Type.Union([
		Type.Literal("points_range"),
		Type.Literal("victory_count"),
		Type.Literal("minimum_victory_count"),
	]),
});

const TMatchMaking = Type.Object({
	info: Type.Object({
		accountid: Type.String(),
		division: TDivision,
		division_next: TDivision,
		progression: Type.Number(),
		rank: Type.Number(),
		score: Type.Number(),
		typeid: Type.Union([Type.Literal(5), Type.Literal(2), Type.Literal(3)]),
		typename: Type.Union([
			Type.Literal("2v2"),
			Type.Literal("3v3"),
			Type.Literal("Royal"),
		]),
	}),
	total: Type.Number(),
	totalactive: Type.Number(),
});

const TZone = Type.Recursive((TSelf) =>
	Type.Object({
		// TODO: change to literal
		flag: Type.String(),
		id: Type.String(),
		name: Type.String(),
		parent: Type.Optional(TSelf),
	}),
);

const TMeta = Type.Object({
	twitch: Type.Optional(Type.String()),
	twitter: Type.Optional(Type.String()),
	vanity: Type.Optional(Type.String()),
	team: Type.Optional(Type.Literal(true)),
	sponsor: Type.Optional(Type.Literal(true)),
	sponsorlevel: Type.Optional(Type.Literal(1)),
	youtube: Type.Optional(Type.String()),
	mastodon: Type.Optional(Type.String()),
});

export const TDateString = Type.Transform(Type.String())
	.Decode((ts) => new Date(ts))
	.Encode((date) => date.toDateString());

export const TPlayer = Type.Object({
	accountid: Type.String(),
	clubtag: Type.Optional(Type.String()),
	clubtagtimestamp: Type.Optional(TDateString),
	displayname: Type.String(),
	matchmaking: Type.Array(TMatchMaking),
	meta: Type.Optional(TMeta),
	timestamp: TDateString,
	trophies: Type.Object({
		counts: Type.Tuple([
			Type.Number(),
			Type.Number(),
			Type.Number(),
			Type.Number(),
			Type.Number(),
			Type.Number(),
			Type.Number(),
			Type.Number(),
			Type.Number(),
		]),
		echelon: Type.Number(),
		points: Type.Number(),
		timestamp: TDateString,
		zone: TZone,
		zonepositions: Type.Union([Type.Null(), Type.Array(Type.Number())]),
	}),
});

export const TPartialPlayer = Type.Object({
	id: Type.String(),
	meta: Type.Optional(TMeta),
	name: Type.String(),
});

export namespace Types {
	export type Player = StaticDecode<typeof TPlayer>;
	export type PartialPlayer = StaticDecode<typeof TPartialPlayer>;
}
