const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userController = require('../controllers/recipeController')

// User Routes
router.get('/',userController.index)
router.get ('/new', userController.new )
router.post ('/', userController.create )

// router.get('/:id', userController.show)


// Recipe Routes
router.get('/:id/recipes',recipeController.index)
router.get ('/newrecipe', recipeController.new )
router.post ('/', recipeController.create )





module.exports = router