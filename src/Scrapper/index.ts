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
    try {
      const response = await fetch(this._url);
      return await response.text();
    } catch (e: any) {
      if (e.message.includes('Failed to parse URL')) throw e;
      throw new Error(`Failed to fetch ${this._url}`);
    }
  }

  /**
   * Parse html for a specific selector
   * @param {string} selector - html selector
   * @return {Promise<cheerio.Element[]>} - Promise for elements
   */
  async getElements(selector: string): Promise<cheerio.Element[]> {
    const html = await this.getHtml();
    const $ = cheerio.load(html);
    return $(selector).toArray();
  }

  /**
   * Parse html for a specific selector and return the text
   * @param {string} selector - html selector
   * @return {Promise<string[]>} - Promise for element texts
   */
  async getElementsAsText(selector: string): Promise<string[]> {
    const html = await this.getHtml();
    const $ = cheerio.load(html);
    const elements = await this.getElements(selector);
    return elements.map((element: cheerio.Element) => $(element).text());
  }
}
