// Models
const Article = require("../models/Article");

// methods
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


module.exports = {
    findMe,
};
