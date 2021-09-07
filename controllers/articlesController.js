// Models
const Article = require("../models/Article");

// Get routes
const get_allArticles = async function (req, res, next) {
    const validUser = await req.user;
    const allArticles = await req.allArticles;
    let data = {
        validUser,
        allArticles
    }
    res.render("all-articles", { data });
};
const get_viewArticle = async function (req, res, next) {
    const validUser = await req.user;
    const article = await req.foundArticle;
    const data = {
        validUser,
        article
    }
    console.log(data)
    res.render("article", { data });
};
const get_editArticle_form = function (req, res, next) {
    const validUser = req.user;
    res.render("edit", { user: validUser });
};
const get_deleteArticle_form = function (req, res, next) {
    const validUser = req.user;
    res.render("deleteArticle", { user: validUser });
};

// Post routes
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
const post_deleteArticle_DB = async function (req, res, next) {
    const dbId = req.foundData;

    await Article.findByIdAndDelete(dbId.id, function (err) {
        if (err) return console.log(err);
        console.log("Article deleted successful");
    });

    res.redirect("/");
};

module.exports = {
    get_allArticles,
    get_viewArticle,
    get_editArticle_form,
    get_deleteArticle_form,
    post_editArticle_DB,
    post_deleteArticle_DB,
};
