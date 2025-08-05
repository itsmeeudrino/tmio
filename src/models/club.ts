import { Type, type StaticDecode } from "@sinclair/typebox";
import { TPartialPlayer } from "./player";
import { TDateStamp } from "./campaign";

export const TClub = Type.Object({
	authorplayer: TPartialPlayer,
	backgroundUrl: Type.String(),
	creationTimestamp: TDateStamp,
	decalSponsor4x1Url: Type.String(),
	decalUrl: Type.String(),
	description: Type.String(),
	featured: Type.Boolean(),
	iconUrl: Type.String(),
	id: Type.Number(),
	latesteditorplayer: TPartialPlayer,
	logoUrl: Type.String(),
	membercount: Type.Number(),
	name: Type.String(),
	// TODO: what's highest popularity level
	popularityLevel: Type.Number(),
	screen8x1Url: Type.String(),
	screen16x1Url: Type.String(),
	screen16x9Url: Type.String(),
	screen64x41Url: Type.String(),
	// TODO: what other values
	state: Type.Union([
		Type.Literal("public"),
		Type.Literal("private-open"),
		Type.Literal("private-closed"),
	]),
	tag: Type.Optional(Type.String()),
	verified: Type.Boolean(),
	verticalUrl: Type.String(),
});

export namespace Types {
	export type Club = StaticDecode<typeof TClub>;
}
