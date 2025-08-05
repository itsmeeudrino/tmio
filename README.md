# tmio

A TypeScript client for the [Trackmania.io](https://trackmania.io/) API. Easily fetch data about players, campaigns, clubs, leaderboards, maps, competitions, TOTD (Track of the Day), and COTD (Cup of the Day).

## Features

- Fully typed API responses using [TypeBox](https://github.com/sinclairzx81/typebox)
- Supports custom fetch implementations (e.g. Tauri, Bun, etc.)
- Covers all major endpoints of Trackmania.io

## Installation

```bash
npm install tmio
```
## Usage

### Fetch a seasonal campaign

```typescript
import { Campaign } from "tmio";

const { data: campaign, err } = await Campaign.fetchSeason("101585");

if (!err) {
    console.log("Fetched campaign:", campaign);
}
```

### Fetch a club by ID

```typescript
import { Club } from "tmio";

const { data: club, err } = await Club.fetch("150");

if (!err) {
    console.log("Fetched club:", club);
}
```

### Search for clubs

```typescript
import { Club } from "tmio";

const { data: clubs, err } = await Club.search("arab league");

if (!err) {
    console.log("Found clubs:", clubs);
}
```

### Fetch leaderboard for a map

```typescript
import { Leaderboard } from "tmio";

const { data: leaderboard, err } = await Leaderboard.fetch(
    "Kn63nCh9bkaRHcZZsrtf_KcLMH2",
    "0676571d-3907-4dcb-8068-df28684e6a03",
    { length: 100, offset: 0 }
);

if (!err) {
    console.log("Leaderboard:", leaderboard);
}
```

### Fetch personal best (requires auth token)

```typescript
import { Leaderboard } from "tmio";

const { data: personalBest, err } = await Leaderboard.fetchPersonalBest(
    "Kn63nCh9bkaRHcZZsrtf_KcLMH2",
    "0676571d-3907-4dcb-8068-df28684e6a03",
    "Trackmania.io AUTH_TOKEN"
);

if (!err) {
    console.log("Personal best:", personalBest);
}
```

### Fetch map details

```typescript
import { Map } from "tmio";

const { data: map, err } = await Map.fetch("Kn63nCh9bkaRHcZZsrtf_KcLMH2");

if (!err) {
    console.log("Map details:", map);
}
```

### Fetch Track of the Day

```typescript
import { TOTD } from "tmio";

const { data: totd, err } = await TOTD.fetch(0);

if (!err) {
    console.log("Track of the Day:", totd);
}
```

### Fetch Cup of the Day

```typescript
import { COTD } from "tmio";

const { data: cotd, err } = await COTD.fetch(0);

if (!err) {
    console.log("Cup of the Day:", cotd);
}
```

### Fetch competitions

```typescript
import { Competition } from "tmio";

const { data: competitions, err } = await Competition.fetchCompetitions(0);

if (!err) {
    console.log("Competitions:", competitions);
}
```

### Use a custom fetch implementation (e.g. Tauri)

```typescript
import { useCustomFetch } from "tmio";
import { fetch as tauriFetch } from "@tauri-apps/api/http";
 
// Set the custom fetch function to Tauri's fetch
useCustomFetch(tauriFetch);

// Now all API calls will use Tauri's fetch instead of the default fetch
Campaign.fetchSeason('101585').then(function(campaign) {
    console.log(campaign);
});

```

## API Coverage

- **Players**: fetch by ID, search, group
- **Campaigns**: seasonal, weekly, club campaigns
- **Clubs**: fetch by ID, search
- **Leaderboards**: global, personal bests
- **Maps**: fetch by ID
- **TOTD**: Track of the Day
- **COTD**: Cup of the Day
- **Competitions**: details, leaderboard, matches

## Type Safety

All responses are validated and typed using TypeBox schemas. See the `src/models` directory for schema definitions.

## License

MIT

## Links

- [TypeBox](https://github.com/sinclairzx81/typebox)
