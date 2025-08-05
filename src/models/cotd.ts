import { Type } from "@sinclair/typebox";
import { TDateStamp } from "./campaign";

export const TCOTD = Type.Object({
	endtime: TDateStamp,
	id: Type.Number(),
	name: Type.String(),
	players: Type.Number(),
	starttime: TDateStamp,
});
