// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const viewArticlesControl = require('../controllers/viewArticlesController');

/* GET home page. */
router.get('/', viewArticlesControl.get_allArticles);
router.get('/123', viewArticlesControl.get_viewArticle); // future route will be /:id 


module.exports = router;
