const Recipes = require("../models/Recipes")
const Comment = require('../models/Comments')

const commentController = {
    index: (req, res) => {
        const recipes = req.params.id
        Comments.findById(recipes).populate('comments').then((recipes) => {
            const comments = recipes.comments
            res.render('comments/index', { comments, recipes })
        })
    },
    new: (req, res) => {
        const recipes = req.params.id
        res.render('comments/new', {recipes: recipes})
    },
    create: (req, res) => {
        const recipes = req.params.id
        Comments.findById(recipes)
        .then((recipes) => {
            Comments.create(req.body)
            .then((comments) => {
                recipes.comments.push(comments)
                comments.save()
                res.redirect(`/${recipes._id}/comments`)
                
        })
        
        })
}
}
    
    

    

module.exports = commentController