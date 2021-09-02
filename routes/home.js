// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const homeControl = require('../controllers/homeController');
// middleware
const middleware = require('../middleware/auth');

/* GET home page. */
router.get('/', middleware.auth, homeControl.get_homeHbs);

module.exports = router;
