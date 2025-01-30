const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // const targetPath = req.originalUrl.replace("/store", "");
    const targetPath = req.query.url ? req.query.url.toString() : undefined;
    if (!targetPath) {
      res.status(400).send("No URL provided");
      return;
    }
    const response = await axios.get(targetPath);
    res.status(response.status).send(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .send(error.response?.data || "Error proxying request");
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
