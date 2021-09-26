const express = require("express");
const app = express();
const cors = require("cors");
// const interests = require("../bestHikes.json");
const HikeModel = require("./models/hikeModel");
// const request = require("supertest")

app.use(cors());
app.use(express.json());

app.get("/hikes", async (request, response) => {
  const result = await HikeModel.find({});
  response.send(result);
});

// app.get("/hikes", async (request, response) => {
//   response.send(interests);
// });

module.exports = app;
