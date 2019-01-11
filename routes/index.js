const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/userController')
const recipeController = require('../controllers/recipeController')

// User Routes
router.get('/',userController.index)
router.get('/new', userController.new )
router.post('/', userController.create )
router.get('/:banana', userController.show)


// Recipe Routes
router.get('/:userId',recipeController.index)
router.get ('/:userId/newRecipe', recipeController.new )
router.post ('/:userId/recipes', recipeController.create )
// router.get('/:id', userController.show)





module.exports = router