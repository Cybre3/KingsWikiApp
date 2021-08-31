// Models
const Article = require("../models/Article");

// Get Routes
const get_createArticle_form = function (req, res, next) {
    res.render("createArticle");
};

// Post routes
const post_saveArticle_DB = function (req, res, next) {
    const { title, description } = req.body;
    console.log("This is req.body:", req.body);

    const aNewArticle = new Article({ title, description });
    console.log("This is aNewArticle obj:", aNewArticle);

    aNewArticle
        .save()
        .then(() => {
            res.status(201).json({
                message: "New Article created successfully!",
                article: aNewArticle,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Article did not save!",
                error: err,
            });
        });
};

module.exports = {
    get_createArticle_form,
    post_saveArticle_DB,
}