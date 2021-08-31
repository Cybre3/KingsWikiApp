// Models
const User = require('../models/User');

// get controllers
const get_registerForm = function (req, res, next) {
    res.render("register");
};

// post controllers
const post_createUser = function (req, res, next) {
    const { username, password } = req.body;
    console.log("This is req.body:", req.body);

    const aNewUser = new User({ username, password });
    console.log("This is aNewArticle obj:", aNewUser);

    aNewUser
        .save()
        .then(() => {
            res.status(201).json({
                message: "New User created successfully!",
                user: aNewUser,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "User did not save!",
                error: err,
            });
        });
};

module.exports = {
    get_registerForm,
    post_createUser
};
