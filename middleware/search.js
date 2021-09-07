// Models
const Article = require("../models/Article");
const User = require("../models/User");

// methods
const findMyArticle = async function (req, res, next) {
    const cred = req.params.id;

    try {
        const data = await Article.findById(cred).lean();
        console.log("Middleware: Search a Article, Found!", data);
        req.foundArticle = data;
        next();
    } catch (err) {
        console.log(err);
    }
    // const string = 'working' + credential;

    // return string;
};

const findMe = async function (req, res, next) {
    // const artName = document.getElementById('title');
    // const body = req.body;
    // console.log(body);

    const cred = "612abf9c2793b1a9a7f682fc";

    try {
        const data = await Article.findById(cred, function (err, data) {
            if (err) return console.log(err);
            console.log("Middleware: Found!", data);
            req.foundData = data;
            return data;
        });
    } catch (err) {
        console.log(err);
    }
    // const string = 'working' + credential;

    // return string;
    next();
};

const findAllArticles = async function (req, res, next) {
    try {
        const data = await Article.find({}).lean();
        req.allArticles = data;
        console.log("Middleware: Search all Articles, Found!", data);
        next();
    } catch (err) {
        console.log(err);
    }
    // const string = 'working' + credential;

    // return string;
};


module.exports = {
    findMe,
    findAllArticles,
    findMyArticle
};
