const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const get_loginForm = function (req, res, next) {
    res.render("login");
};

const loginUser = async function (req, res, next) {
    const body = req.body;
    // console.log(body);

    try {
        const userLoginPassword = body.password;
        console.log("This is the loginHashPassword", userLoginPassword);

        // Get user from DB
        const userDbmatch = await User.findOne({ username: body.username });
        if (!userDbmatch)
            return res.status(400).send(errror.details[0].message);
        console.log("The userDb obj", userDbmatch);
        console.log("This is userDb password match", userDbmatch.password);

        // compare user loginPage input password to DB user password
        const matchPassword = await bcrypt
            .compare(userLoginPassword, userDbmatch.password)
            .then((validPass) => validPass)
            .catch((err) => err);
        console.log("Password match is:", matchPassword); // true

        // condition if passwords do not match
        if (!matchPassword)
            return res.status(400).send("Invalid email or password");
        // res.redirect("/login");

        // Generate token - comes from User Schema
        const token = userDbmatch.generateAuthToken();

        res.cookie("token", token);
        
        res.status(200).json({
            message: "This is the token:",
            token: token,
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    get_loginForm,
    loginUser,
};
