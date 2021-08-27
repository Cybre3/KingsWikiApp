const get_allArticles = function (req, res, next) {
    res.render("all-articles");
};

const get_viewArticle = function (req, res, next) {
    res.render("article");
};



module.exports = {
    get_allArticles,
    get_viewArticle,
};
