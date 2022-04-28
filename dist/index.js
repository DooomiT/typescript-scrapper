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
    const response = await fetch(this._url);
    return await response.text();
  }
  async getTitle() {
    const html = await this.getHtml();
    const $ = import_cheerio.default.load(html);
    return $("title").text();
  }
  async getBody() {
    const html = await this.getHtml();
    const $ = import_cheerio.default.load(html);
    return $("body").text();
  }
};

// src/index.ts
async function main() {
  const scrapper = new Scrapper("https://www.wikipedia.com");
  const title = await scrapper.getTitle();
  console.log(title);
}
main();
