import {describe, expect, it} from 'vitest';
import {Scrapper} from '../../src/Scrapper';

describe('Scrapper.getElementsAsText', () => {
  it('should return elements of the url', async () => {
    const scrapper = new Scrapper(
        'https://www.bundesliga.com/de/bundesliga/tabelle',
    );
    const elements = await scrapper.getElementsAsText('tr td');
    expect(elements).toBeTruthy();
  });
});
