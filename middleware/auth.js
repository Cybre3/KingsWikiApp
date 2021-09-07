const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
    const token = req.cookies.token ? req.cookies.token : "pass";
    const allArticles = await req.allArticles;
    const data = {
        token,
        allArticles,
    };

    console.log("Middleware auth", data);

    if (token !== "pass") {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;
    }

    next();
    // console.log("this is auth token", authToken);
};

module.exports = { auth };
