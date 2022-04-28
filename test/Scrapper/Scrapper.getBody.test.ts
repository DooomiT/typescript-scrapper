import {describe, expect, it} from 'vitest';
import {Scrapper} from '../../src/Scrapper/index';

describe('Scrapper.getBody', () => {
  it('should return body of the url', async () => {
    const scrapper = new Scrapper('https://www.wikipedia.com');
    const body = await scrapper.getBody();
    expect(body).toBeTruthy();
  });

  it('should throw error if url is not valid', async () => {
    const scrapper = new Scrapper('abc.abc.abc');
    try {
      await scrapper.getBody();
    } catch (e) {
      expect(e.message).toBe('Failed to parse URL from abc.abc.abc');
    }
  });

  it('should throw error if url does not exist', async () => {
    const scrapper = new Scrapper('https://abc.abc.abc');
    try {
      await scrapper.getBody();
    } catch (e) {
      expect(e.message).toBe('Failed to fetch https://abc.abc.abc');
    }
  });
});
