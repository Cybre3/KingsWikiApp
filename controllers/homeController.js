const get_homeHbs = function (req, res, next) {
    // Grab the Token cookie
    const validUser = req.user;
    
    console.log(validUser);

    res.render("home", { user: validUser });
};

module.exports = {
    get_homeHbs,
};
