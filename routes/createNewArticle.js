// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const createArticleControl = require('../controllers/createArticleController');

/* GET Create new article form. */
router.get('/', createArticleControl.get_createArticle_form);

module.exports = router;
