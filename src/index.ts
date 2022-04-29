import {Scrapper} from './Scrapper/index';

/**
 * Main function
 */
async function main() {
  const scrapper = new Scrapper('https://www.bundesliga.com/de/bundesliga/tabelle');
  // get each td in tr of the Bundesliga as map
  const elements = await scrapper.getElementsAsText('tr td');
  console.log(elements);
}

main();
