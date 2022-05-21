// NPM Library imports
var express = require("express");
var router = express.Router();
// Controllers
const articlesControl = require("../controllers/articlesController");

// Middleware
const middlewareSearch = require("../middleware/search");
const middlewareAuth = require("../middleware/auth");

// Get new all articles
router.get(
    "/",
    middlewareSearch.findAllArticles,
    middlewareAuth.auth,
    articlesControl.get_allArticles
);
router.get(
    "/:id",
    middlewareSearch.findMyArticle,
    middlewareAuth.auth,
    articlesControl.get_viewArticle
); // future route will be /:id
router.get(
    "/edit-article/123",
    middlewareAuth.auth,
    articlesControl.get_editArticle_form
); // future route will be /:id
/* // Having issues with logo on article page */
router.get(
    "/delete-article/123",
    middlewareAuth.auth,
    middlewareSearch.findMe,
    articlesControl.get_deleteArticle_form
);

// Post routers
router.post(
    "/edit-article/123",
    middlewareSearch.findMe,
    articlesControl.post_editArticle_DB
);
router.post(
    "/delete-article/123",
    middlewareSearch.findMe,
    articlesControl.post_deleteArticle_DB
);

module.exports = router;
