const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// User Routes
router.get('/',userController.index)
router.post ('/new', userController.create )
// router.get ('/new', userController.new )
// router.get('/:id', userController.show)


// Recipe Routes

module.exports = router