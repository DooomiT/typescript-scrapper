var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// src/Scrapper/index.ts
var import_cheerio = __toESM(require("cheerio"));
var Scrapper = class {
  constructor(_url) {
    this._url = _url;
  }
  async getHtml() {
    try {
      const response = await fetch(this._url);
      return await response.text();
    } catch (e) {
      if (e.message.includes("Failed to parse URL"))
        throw e;
      throw new Error(`Failed to fetch ${this._url}`);
    }
  }
  async getElements(selector) {
    const html = await this.getHtml();
    const $ = import_cheerio.default.load(html);
    return $(selector).toArray();
  }
  async getElementsAsText(selector) {
    const html = await this.getHtml();
    const $ = import_cheerio.default.load(html);
    const elements = await this.getElements(selector);
    return elements.map((element) => $(element).text());
  }
};

// src/index.ts
async function main() {
  const scrapper = new Scrapper("https://www.bundesliga.com/de/bundesliga/tabelle");
  const elements = await scrapper.getElementsAsText("tr td");
  console.log(elements);
}
main();
