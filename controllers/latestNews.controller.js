const LatestNews = require("../models/LatestNews");

module.exports.getAllLatestNews = async (req, res) => {
  try {
    const latestNews = await LatestNews.find();
    res.status(200).send(latestNews);
  } catch (error) {
    console.log(error);
  }
};

module.exports.addLatestNews = async (req, res) => {
  try {
    const { author, title, news_desc, post_date } = req.body;

    if (req.file) {
      Object.assign(req.body, {
        newsBanner: "/uploads/images/" + req.file.filename,
      });
    }
    const latestNews = new LatestNews({
      author: author,
      title: title,
      news_desc: news_desc,
      newsBanner: req.body.newsBanner,
      post_date: post_date,
    });
    await latestNews.save();

    res.status(200).send(latestNews);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports.updateLatestNews = async (req, res) => {
  try {
  } catch (error) {}
};
