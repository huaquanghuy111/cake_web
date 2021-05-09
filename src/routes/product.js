const express = require('express')
const router = express.Router()
const products = require('../app/controllers/ProductController')

router.get('/:slug',products.show)
module.exports = router