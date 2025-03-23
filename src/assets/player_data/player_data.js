// import { getPlayers } from "../../services/sleeper-api"

// const playerData = {}

// const fetchPlayers = async () => {
//   playerData = await getPlayers()
// }

// fetchPlayers()

// export default playerData;



// import { existsSync, createWriteStream } from "fs";
// import { mkdir } from "fs/promises";
// import { Readable } from 'stream';
// import { finished } from 'stream/promises';
// import { resolve } from "path";
// const downloadFile = (async (url, fileName) => {
//   const res = await fetch(url);
//   if (!existsSync("downloads")) await mkdir("downloads"); //Optional if you already have downloads directory
//   const destination = resolve("./downloads", fileName);
//   const fileStream = createWriteStream(destination, { flags: 'wx' });
//   await finished(Readable.fromWeb(res.body).pipe(fileStream));
// });

// await downloadFile("https://api.sleeper.app/v1/players/nfl", "player-data.js")


import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const stream = createWriteStream('player-data.txt');
const { body } = await fetch('https://api.sleeper.app/v1/players/nfl');
await finished(Readable.fromWeb(body).pipe(stream));