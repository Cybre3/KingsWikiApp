const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Article = require('../models/Article');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is Required, please enter username"],
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

const User = mongoose.model("user", userSchema);

module.exports = User;
