// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const homeControl = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeControl.get_homeHbs);

module.exports = router;
