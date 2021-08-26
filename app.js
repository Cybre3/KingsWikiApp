// NPM Library imports
var createError = require("http-errors");
var express = require("express");
const expHbs = require("express-handlebars");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Route Handlebars Templates
var homeRouter = require("./routes/home");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var all_articlesRouter = require("./routes/viewAnyArticle");
var createArticleRouter = require("./routes/createNewArticle");

var app = express();

// view engine setup
const layoutPath = path.join(__dirname, "/views/layouts");

app.engine(
    "hbs",
    expHbs({
        defaultLayout: "main",
        extname: ".hbs",
        layoutsDir: layoutPath,
        partialsDir: __dirname + "/views/partials",
    })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes Defined
app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/all-articles", all_articlesRouter);
app.use("/createArticle", createArticleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.render("404");
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error", { layout: false });
});

module.exports = app;
