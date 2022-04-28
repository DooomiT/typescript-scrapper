import cheerio from 'cheerio';

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
   * Fetches html of the url
   * @return {Promise<string>}
   */
  async getHtml(): Promise<any> {
    const response = await fetch(this._url);
    return await response.text();
  }

  /**
   * Parses html title
   * @return {Promise<{title: string, body: string}>}
   * @throws {Error}
   */
  async getTitle(): Promise<string> {
    const html = await this.getHtml();
    const $ = cheerio.load(html);
    return $('title').text();
  }

  /**
   * Parses html body
   * @return {Promise<{title: string, body: string}>}
   * @throws {Error}
   */
  async getBody(): Promise<string> {
    const html = await this.getHtml();
    const $ = cheerio.load(html);
    return $('body').text();
  }
}
