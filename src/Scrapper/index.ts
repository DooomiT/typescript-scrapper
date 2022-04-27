/**
 * Scrapper class
 */
export class Scrapper {
  /**
   * constructor of Scrapper
   * @param {string} _url
   */
  constructor(private readonly _url: string) {}

  /**
   * Fetches content of the urk
   * @return {Promise<string>}
   */
  async getData(): Promise<any> {
    return await fetch(this._url);
  }
}
