const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is Required, please enter username"],
        unique: [true, "This username already exists!"],
    },
    password: {
        type: String,
        required: [true, "Password is Required, please enter password"],
    },
    createdArticles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Article",
        },
    ],
});

userSchema.methods.findUser = function () {
    return mongoose.model("user").find({ _id: this._id }, function () {
        console.log("User Found!");
    });
};

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    return token;
};

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(+process.env.DB_SALTROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
