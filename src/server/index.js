const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const aylien = require("aylien_textapi");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

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
app.post("/post", function (req, res) {
  res.send(req.body);
  // res.send(mockAPIResponse)
});
