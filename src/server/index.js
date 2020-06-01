const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const aylien = require("aylien_textapi");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));

app.use(cors());

console.log(__dirname);

// set aylien API credentias
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

const appData = {};

const analysisFunction = async (req, res) => {
  await textapi.classify(
    {
      text: req.body.document,
    },
    (error, response) => {
      if (error === null) {
        appData.label = response.categories.length === 0 ? "There is no label detected" : response.categories[0].label 
      }
    }
  );

  await textapi.sentiment(
    {
      text: req.body.document,
    },
    (error, response) => {
      if (error === null) {
        appData.polarity = response.polarity;
        appData.subjectivity = response.subjectivity;
      }
    }
  );

  await textapi.entities(
    {
      text: req.body.document,
    },
    (error, response) => {
      if (error === null) {
        appData.location = response.entities.location
          ? response.entities.location[0]
          : "There is no location detected";

        appData.keyword = response.entities.keyword
          ? response.entities.keyword.slice(0, 6).join(" & ")
          : "There is no keyWords detected";

        appData.organization = response.entities.organization
          ? response.entities.organization[0]
          : "There is no organization detected";

        appData.person = response.entities.person
          ? response.entities.person.join(" & ")
          : "There is no person detected";
      }
      console.log(appData)
      res.send(JSON.stringify(appData));
    }
  );
};

app.post("/add", analysisFunction);
