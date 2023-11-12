const express = require("express");
const app = express.Router();

const latestNewsController = require("../../controllers/latestNews.controller");
const { auth } = require("../../middleware/auth");

app.get("/", latestNewsController.getAllLatestNews);
app.post(
  "/add",
  auth,
  upload.single("newsBanner"),
  latestNewsController.addLatestNews
);
app.put(
  "/update/:id",
  upload.single("newsBanner"),
  latestNewsController.updateLatestNews
);

module.exports = app;
