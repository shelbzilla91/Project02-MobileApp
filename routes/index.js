const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const recipeController = require('../controllers/recipeController')

// User Routes
router.get('/',userController.index)
router.get('/new', userController.new )
router.post('/', userController.create )
router.get('/:banana', userController.show)


// Recipe Routes
router.get('/:id',recipeController.index)
router.get ('/:id/newRecipe', recipeController.new )
router.post ('/recipes/:userId', recipeController.create )
// router.get('/:id', userController.show)





module.exports = router