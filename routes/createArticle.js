// NPM Library imports
var express = require("express");
var router = express.Router();
// Controllers
const createArticleControl = require("../controllers/createArticleController");
// Middleware
const middlewareAuth = require('../middleware/auth');

// Get create article form
router.get('/', middlewareAuth.auth, createArticleControl.get_createArticle_form);

module.exports = router;