const get_homeHbs = async function (req, res, next) {
    // Grab the Token cookie
    const validUser = await req.user;
    const allArticles = await req.allArticles;
    const data = {
        validUser,
        allArticles
    }
    
    console.log("homeController Articles", data.allArticles);
    console.log("homeController user", data.validUser);

    res.render("home", { data: data });
};

module.exports = {
    get_homeHbs,
};
