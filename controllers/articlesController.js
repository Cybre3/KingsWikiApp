// Models
const Article = require("../models/Article");

// Get routes
const get_createArticle_form = function (req, res, next) {
    res.render("createArticle");
};
const get_editArticle_form = function (req, res, next) {
    res.render("edit");
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

// Patch routes
const post_editArticle_DB = function (req, res, next) {
    const dbId = req.foundData;
    console.log("passed on data", dbId.id);

    const updatedArticle = { description: req.body.description };

    Article.findByIdAndUpdate(dbId.id, updatedArticle, function (err, data) {
        if (err) return console.log(err);
        console.log("Article update successful", data);
    });

    res.redirect("/");
};

const post_deleteArticle_DB = function (req, res, next) {
    const dbId = req.foundData;
    console.log("passed on data", dbId.id);

    Article.findByIdAndRemove(dbId.id, function (err, data) {
        if (err) return console.log(err);
        console.log("Article deleted successful", data);
    });

    res.redirect("/");
};

module.exports = {
    get_createArticle_form,
    get_editArticle_form,
    post_saveArticle_DB,
    post_editArticle_DB,
    post_deleteArticle_DB
};
