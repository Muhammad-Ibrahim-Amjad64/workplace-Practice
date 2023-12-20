/** @format */

const router = require('express').Router();
const {
  productsController,
  products,
  sendHttpRequest,
} = require('../Controller/ProductControler');
const { Order } = require('../Controller/OrderControler');
const headers = require('../Middleware/Checkauth');
router.get('/products', productsController);
router.post('/checkout', products);
router.post('/sent_payments', sendHttpRequest);
router.post('/order/:id', Order);
module.exports = router;
//  headers,
