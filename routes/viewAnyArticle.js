// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const viewArticlesControl = require('../controllers/viewArticlesController');

/* GET home page. */
router.get('/', viewArticlesControl.get_allArticles);
router.get('/123', viewArticlesControl.get_viewArticle); // future route will be /:id 
router.get('/editArticle/123', viewArticlesControl.get_editArticle_form); // future route will be /:id 
/* // Having issues with logo on article page */
/* Make edit a route, then /:id - need edit controller*/

module.exports = router;
