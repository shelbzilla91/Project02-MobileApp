const mongoose = require('../db/connection')
const commentSchema = mongoose.Schema

const Comment = new Schema({
    title: String,
    created: Date,
    user: Number,
    content: String
});

module.exports = mongoose.model("Comment", Comment)