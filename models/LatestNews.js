const mongoose = require("mongoose");

// Define the Latest News schema
const latestNewsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  news_desc: {
    type: String,
    required: true,
  },
  newsBanner: {
    type: String,
    required: true,
  },
  post_date: {
    type: String,
    required: true,
  },
});

// Create the Latest News model
const LatestNews = mongoose.model("LatestNews", latestNewsSchema, "LatestNews");

// Export the model
module.exports = LatestNews;
