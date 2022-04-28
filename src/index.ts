import {Scrapper} from './Scrapper/index';

/**
 * Main function
 */
async function main() {
  const scrapper = new Scrapper('https://www.wikipedia.com');
  const title = await scrapper.getTitle();
  console.log(title);
}

main();
