// NPM Library imports
var express = require('express');
var router = express.Router();
// Controllers
const loginControl = require('../controllers/loginController');
// Middleware

/* GET home page. */
router.get('/', loginControl.get_loginForm);

// Post router
router.post('/', loginControl.loginUser);



module.exports = router;
