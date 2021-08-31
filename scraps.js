/* 

// Error Handler
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: "", password: "" };

    // duplicate error code
    if (err.code === 11000) {
        errors.username = "That username is already registered";
        return errors;
    }

    // validation errors
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;

     try {
        const newUser = await User.create({ username, password });
        // newUser.save();
        // console.log("New user was created", newUser);
        res.status(201).json(newUser);
        res.redirect("/");
    } catch (err) {
        const errors = handleErrors(err);
        // if (err) return;
        req.session.errors = errors;
        // res.status(400).json({ errors });
        res.redirect("/register");
    }
};

// mongoDB connection
mongoose
    .connect(
      "mongodb+srv://atlasAdmin:abcde12345@cluster0.g2ipk.mongodb.net/cubeWorkshop?retryWrites=true&w=majority",
      {
        dbName: "cubeWorkshop",
        user: "atlasAdmin",
        pass: "abcde12345",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((res) => console.log("db connected"))
    .catch((err) => console.log(err));

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Testing Mongoose db.once method");
  });

  //Schema methods
  articleSchema.methods.findArticle = function (id) {
    return mongoose
        .model("article")
        .findById(this.id, function (err, user) {
            if (err) return console.log(err);
            console.log("User Found!", user);
            return user;
        });
};

// Mongoose methods
const findMe = async function (req, res, next) {
    // const artName = document.getElementById('title');
    // const body = req.body;
    // console.log(body);

    const cred = "612abf9c2793b1a9a7f682fc";

    try {
        const data = await Article.findById(cred, function (err, data) {
            if (err) return console.log(err);
            console.log("Middleware: Found!", data);
            req.found = data;
        });
    } catch (err) {
        console.log(err);
    }
    // const string = 'working' + credential;

    // return string;
    next();
};

const updateMe = async function (req, res, next) {
    // const artName = document.getElementById('title');
    // const body = req.body;
    // console.log(body);

    const cred = "612abf9c2793b1a9a7f682fc";

    try {
        const data = await Article.findByIdAndUpdate(cred, function (err, data) {
            if (err) return console.log(err);
            console.log("Middleware: Found!", data);
            req.found = data;
        });
    } catch (err) {
        console.log(err);
    }
    // const string = 'working' + credential;

    // return string;
    next();
};

Cube.findByIdAndUpdate(req.params.id, newCubeInfo, function (err, cube) {
        if (err) return console.error(err);
        console.log("cube updated");
    })
        .lean()
        .then((data) => {
            console.log(
                "Cube updated DB data:",
                data,
                "This cube Id:",
                req.params.id
            );
        })
        .catch((err) => console.log(err));

const deleteMe = async function (req, res, next) {
    // const artName = document.getElementById('title');
    // const body = req.body;
    // console.log(body);

    const cred = "612abf9c2793b1a9a7f682fc";

    try {
        const data = await Article.findByIdAndUpdate(cred, function (err, data) {
            if (err) return console.log(err);
            console.log("Middleware: Found!", data);
            req.found_id_db = data._id;
        });
    } catch (err) {
        console.log(err);
    }
    // const string = 'working' + credential;

    // return string;
    next();
};

// mongoose aggregate
Activity.find(query)
        .skip(offset)
        .limit(limit)
        .sort({timestamp: -1})
        .populate('source')
        .exec()

*/
