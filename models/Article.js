const mongoose = require("mongoose");
const { schema } = require("./User");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a title!"],
        unique: [true, "This title already exists!"],
        minlength: [5, "Username must be atleast 5 characters"],
    },
    description: {
        type: String,
        required: [true, "Please enter details about your title!"],
        minlength: [20, "Description must be atleast 20 characters long"],
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
