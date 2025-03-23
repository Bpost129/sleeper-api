// This creates an unformatted json file of data (no specific order??)

// import { createWriteStream } from 'fs';
// import { Readable } from 'stream';
// import { finished } from 'stream/promises';

// const stream = createWriteStream('player-data.txt');
// const { body } = await fetch('https://api.sleeper.app/v1/players/nfl');
// await finished(Readable.fromWeb(body).pipe(stream));

// ------------------------------------------------------------------------

// Solution too large for local storage

// const url = 'https://api.sleeper.app/v1/players/nfl';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     savePlayerData(data);
//   })
//   .catch(error => console.error('Error fetching data:', error));

// function savePlayerData(data) {
//   try {
//     const serializedData = JSON.stringify(data);
//     localStorage.setItem('sleeperPlayerData', serializedData);
//     console.log('Player data saved to localStorage');
//   } catch (error) {
//     console.error('Error saving data to localStorage:', error);
//   }
// }

// const storedData = localStorage.getItem('sleeperPlayerData');
// if (storedData) {
//   const parsedData = JSON.parse(storedData);
//   console.log('Retrieved player data:', parsedData);
// }