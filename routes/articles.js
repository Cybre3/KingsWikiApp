// NPM Library imports
var express = require("express");
var router = express.Router();
// Controllers
const articlesControl = require("../controllers/articlesController");

// Middleware
const middleware = require("../middleware/search");

/* GET Create new article form. */
router.get("/", articlesControl.get_createArticle_form);
router.get("/123", articlesControl.get_editArticle_form); // future route will be /:id
/* // Having issues with logo on article page */

// Post routers
router.post("/", articlesControl.post_saveArticle_DB);
router.post("/123", middleware.findMe, articlesControl.post_editArticle_DB);
router.post("/delete/123", middleware.findMe, articlesControl.post_deleteArticle_DB);

module.exports = router;
