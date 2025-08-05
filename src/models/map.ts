import { Type } from "@sinclair/typebox";
import { TDateString, TPartialPlayer } from "./player";

export const TMap = Type.Object({
	author: Type.String(),
	silverScore: Type.Number(),
	bronzeScore: Type.Number(),
	goldScore: Type.Number(),
	authorScore: Type.Number(),
	authorplayer: TPartialPlayer,
	collectionName: Type.Union([Type.Literal("Stadium")]),
	exchangeid: Type.Number(),
	fileUrl: Type.String(),
	filename: Type.String(),
	isPlayable: Type.Boolean(),
	mapId: Type.String(),
	mapStyle: Type.String(),
	mapType: Type.Union([
		Type.Literal("TrackMania\\TM_Race"),
		Type.Literal("TrackMania\\TM_Royal"),
		Type.Literal("TrackMania\\TM_Stunt"),
		Type.Literal("TrackMania\\TM_Platform"),
	]),
	mapUid: Type.String(),
	name: Type.String(),

	submitter: Type.String(),
	submitterplayer: TPartialPlayer,
	thumbnailUrl: Type.String(),
	timestamp: TDateString,
});
