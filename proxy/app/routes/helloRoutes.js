const express = require('express')
const router = express.Router()
const helloController = require('../controllers/helloController')

router.get('/hello', helloController.getHello)
router.post('/hello', helloController.postHello)

module.exports = router
