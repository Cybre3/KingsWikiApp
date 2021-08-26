// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const loginControl = require('../controllers/loginController');

/* GET home page. */
router.get('/', loginControl.get_loginForm);

module.exports = router;
