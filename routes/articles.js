// NPM Library imports
var express = require("express");
var router = express.Router();
// Controllers
const articlesControl = require("../controllers/articlesController");

// Middleware
const middleware = require("../middleware/search");



// Get new all articles
router.get('/', articlesControl.get_allArticles);
router.get('/123', articlesControl.get_viewArticle); // future route will be /:id 
router.get("/edit-article/123", articlesControl.get_editArticle_form); // future route will be /:id
/* // Having issues with logo on article page */
router.get("/delete-article/123", middleware.findMe, articlesControl.get_deleteArticle_form);

// Post routers
router.post("/edit-article/123", middleware.findMe, articlesControl.post_editArticle_DB);
// router.post("/delete-article/123", middleware.findMe, articlesControl.post_deleteArticle_DB);
router.post("/delete-article/123", middleware.findMe, articlesControl.post_deleteArticle_DB);


module.exports = router;
