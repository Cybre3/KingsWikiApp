const get_homeHbs = function (req, res, next) {
    res.render("home");
};

module.exports = {
    get_homeHbs,
};
