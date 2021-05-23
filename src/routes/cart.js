const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');


router.get('/add-to-cart/:id', cartController.addtoCart);
router.get('/reduce/:id', cartController.reduceproduct);
router.get('/remove/:id', cartController.removeproduct);
router.get('/', cartController.show);



module.exports = router;
