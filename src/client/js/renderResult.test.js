import "babel-polyfill";
import { renderResults } from "./renderResult";
import jsdom from "jsdom";
const JSDOM = jsdom.JSDOM;
const dom = new JSDOM(`
                <section>
                    <strong>Form Results:</strong>
                    <div>
                        <h2>labels:</h2>
                        <p class="text" id="label"></p>
                    </div>
                    <div>
                        <h2>polarity:</h2>
                        <p class="text" id="polarity"></p>
                    </div>
                    <div>
                        <h2>subjectivity:</h2>
                        <p class="text" id="subjectivity"></p>
                    </div>
                    <div>
                        <h2>location:</h2>
                        <p class="text" id="location"></p>
                    </div>
                    <div>
                        <h2>organization:</h2>
                        <p class="text" id="organization"></p>
                    </div>
                    <div>
                        <h2>person:</h2>
                        <p class="text" id="person"></p>
                    </div>
                    <div>
                        <h2>keywords:</h2>
                        <p class="text" id="keywords"></p>
                    </div>
                </section>
`);

beforeAll(() => {
  global.document = dom.window.document;
});

describe("rendering the result on the screen", () => {
  const mockData = {
    label: "label_test_string",
    polarity: "polarity_test_string",
    subjectivity: "subjectivity_test_string",
    organization: "organization_test_string",
    person: "person_test_string",
    location: "location_test_string",
    keyword: "keywords_test_string",
  };

  const document = dom.window.document;

  const label = document.querySelector("#label");
  const polarity = document.querySelector("#polarity");
  const subjectivity = document.querySelector("#subjectivity");
  const person = document.querySelector("#person");
  const keywords = document.querySelector("#keywords");
  const location = document.querySelector("#location");
  const organization = document.querySelector("#organization");

  it("Update the DOM with the right data", () => {
    renderResults(mockData);
    expect(label.innerHTML).toEqual("label_test_string");
    expect(polarity.innerHTML).toEqual("polarity_test_string");
    expect(subjectivity.innerHTML).toEqual("subjectivity_test_string");
    expect(person.innerHTML).toEqual("person_test_string");
    expect(keywords.innerHTML).toEqual("keywords_test_string");
    expect(location.innerHTML).toEqual("location_test_string");
    expect(organization.innerHTML).toEqual("organization_test_string");
  });
});
