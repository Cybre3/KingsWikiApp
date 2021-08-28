// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const articlesControl = require('../controllers/articlesController');

/* GET Create new article form. */
router.get('/', articlesControl.get_createArticle_form);

// Post routers
router.post('/', articlesControl.post_saveArticle_DB)

module.exports = router;
