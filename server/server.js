const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apicache = require("apicache");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cache = apicache.middleware;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
const apiCulture = process.env.API_CULTURE;

let url =
  apiUrl +
  "/" +
  apiCulture +
  "/collection?key=" +
  apiKey +
  "&format=json&p=0&ps=10&q=paint&imgonly=true";

// base route
app.get("/", (req, res) => {
  res.send("Welcome to the PXL Museum API");
});

// routes
app.get("/api/collections/", cache("5 minutes"), async (req, res) => {
  try {
    const response = await axios.get(url);

    if (res.status >= 400) {
      throw new Error("Bad response from app");
    }

    res.status(200).json(response.data); // send response
  } catch (err) {
    res.send(err);
  }
});

// set port & listen for requests
const PORT = process.env.PORT || 7000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`),
);
