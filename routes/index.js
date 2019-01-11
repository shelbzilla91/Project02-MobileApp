const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/userController')
const recipeController = require('../controllers/recipeController')
const commentController = require('../controllers/commentController')


// User Routes
router.get('/',userController.index)
router.get('/new', userController.new )
router.post('/', userController.create )
router.get('/:banana', userController.show)
router.get('/:banana/edit', userController.edit)
router.patch('/:banana', userController.update)
router.delete('/:id', userController.delete)


// Recipe Routes
router.get('/:userId',recipeController.index)
router.get ('/:userId/newRecipe', recipeController.new )
router.post ('/:userId/recipes', recipeController.create )


// Comments
router.get('/:userId',commentController.index)
router.get ('/:userId/newcomment', commentController.new )
router.post ('/:userId', commentController.create )








module.exports = router