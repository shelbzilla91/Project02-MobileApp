const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comments = new Schema({
    title: String,
    created: Date,
    user: Number,
    content: String
});

module.exports = mongoose.model("Comment", Comments)