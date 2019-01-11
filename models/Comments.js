const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comments = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Comment", Comments)