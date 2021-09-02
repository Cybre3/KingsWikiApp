// Models
const User = require("../models/User");

// get controllers
const get_registerForm = function (req, res, next) {
    res.render("register");
};

// post controllers
const post_createUser = async function (req, res, next) {
    let { username, password } = req.body;
    console.log("This is req.body:", req.body);

    try {
        const aNewUser = await User.create({ username, password });
        res.status(201).json({
            message: "New User created successfully!",
            user: aNewUser,
        });
        console.log("This is aNewUser obj:", aNewUser);
    } catch (err) {
        res.status(500).json({
            message: "User did not save!",
            error: err,
        });
    }

};

module.exports = {
    get_registerForm,
    post_createUser,
};
