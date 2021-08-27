const get_allArticles = function (req, res, next) {
    res.render("all-articles");
};

const get_viewArticle = function (req, res, next) {
    res.render("article");
};

const get_editArticle_form = function (req, res, next) {
    res.render("edit");
};

module.exports = {
    get_allArticles,
    get_viewArticle,
    get_editArticle_form,
};
