const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

// REQUEST GET ALL ARTICLES from the MongoDB
router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// REQUEST ADD NEW ARTICLW
router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    authorname: req.body.authorname,
  });

  newArticle
    .save()
    .then(() => res.json("The new Article posted successfully!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// REQUEST FIND ARTICLE BY ID
router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// REQUEST FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", (req, res) => {
  Articles.findById(req.params.id).then((article) => {
    article.title = req.body.title;
    article.article = req.body.article;
    article.authorname = req.body.authorname;

    article
      .save()
      .then(() => res.json("The Article is UPDATED successfully"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
});

// REQUEST FIND ARTICLE BY ID AND DELETE
router.delete("/delete/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Article is DELETED successfully"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
