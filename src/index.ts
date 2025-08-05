// import {
// 	Type,
// 	type TAny,
// 	type TAnySchema,
// 	type TSchema,
// } from "@sinclair/typebox";
// import { Value } from "@sinclair/typebox/value";
// import * as PlayerModel from "./models/player";
// import * as CampaignModel from "./models/campaign";
// import { Players } from "./api/player";
// import { Campaign } from "./api/campaign";
// import { Clubs } from "./api/club";
// import { Leaderboard } from "./api/leaderboard";
// import { Map } from "./api/map";
// import { TOTD } from "./api/totd";
// import { COTD } from "./api/cotd";
// import { Competition } from "./api/competition";
// export { useCustomFetch } from "./api/utils";

// // const { data, err } = await Players.fetch(
// // 	"bd7c0aeb-0bdf-4ae7-8029-e88a5adf4ed7",
// // );

// // const { data, err } = await Players.fetchGroup("nadeo");

// // const { data, err } = await Campaign.fetchSeason("101585");

// // const { err, data } = await Campaign.fetchSeasons();
// // const { err, data } = await Campaign.fetchWeeklyShorts();
// // const { err, data } = await Campaign.fetchWeeklyShort("105673");
// // const { err, data } = await Campaign.fetchClubCampaigns("tmal");
// // const { err, data } = await Campaign.fetchClubCampaign(115408, 105160);
// // const { err, data } = await Clubs.search("lol");
// // const { err, data } = await Leaderboard.fetch(
// // 	"Kn63nCh9bkaRHcZZsrtf_KcLMH2",
// // 	"0676571d-3907-4dcb-8068-df28684e6a03",
// // 	{
// // 		length: 100,
// // 		offset: 300,
// // 	},
// // );
// // const { err, data } = await Leaderboard.fetchPersonal(
// // 	"Kn63nCh9bkaRHcZZsrtf_KcLMH2",
// // 	"0676571d-3907-4dcb-8068-df28684e6a03",
// // 	"Trackmania.io SjPobmdvAHn7byAmFA9WfwryDeoSRbfh3Kxw5qz2YoK_AnwpzkhR8WIxve1db4O4",
// // );

// // const { err, data } = await Map.fetch("Kn63nCh9bkaRHcZZsrtf_KcLMH2");
// // const { err, data } = await TOTD.fetch(0);
// // const { err, data } = await COTD.fetch(0);
// // const { err, data } = await Competition.fetch(35190);
// // const { err, data } = await Competition.fetchLeaderboard(35190, 0);
// // const { err, data } = await Competition.fetchMatch(35190, 122423);
// const { err, data } = await Competition.fetchCompetitions(0);

// console.dir({ data, err }, { depth: Infinity });

// // const players = await Players.search("eudr");

// // console.log({ players });

export { Campaign } from "./api/campaign";
export { Club } from "./api/club";
export { Competition } from "./api/competition";
export { COTD } from "./api/cotd";
export { Leaderboard } from "./api/leaderboard";
export { Map } from "./api/map";
export { Players } from "./api/player";
export { TOTD } from "./api/totd";
export { useCustomFetch } from "./api/utils";
