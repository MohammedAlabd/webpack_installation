import "babel-polyfill";
import { handleSubmit } from "./formHandler";
import jsdom from "jsdom";
const JSDOM = jsdom.JSDOM;
const dom = new JSDOM(`
<form class="" onsubmit="return Client.handleSubmit(event)">
    <label for="text"> enter you text below: </label>
    <textarea id="text" type="text" rows="5" cols="100" name="text" >hello world I am a joiner developer and I hope to use mmy skills to make the world better place</textarea>
    <br>
    <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)"
        onsubmit="return Client.handleSubmit(event)">
  </form>
`);
const unMockedFetch = global.fetch;

beforeAll(() => {
  global.document = dom.window.document;

  global.fetch = () =>
    Promise.resolve({
      json: () => ({
        test: "test string",
      }),
    });
  global.Client = {
    renderResults: () => null,
  };
});

afterAll(() => {
  global.fetch = unMockedFetch;
});

describe("handleSubmit", () => {
  it("works", async () => {
    const json = await handleSubmit({ preventDefault: () => null });
    expect(json).toEqual(1);
  });
});
