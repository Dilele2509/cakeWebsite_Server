'use strict';

const express = require('express');
const orderController = require('../controllers/orderController');    
const router = express.Router();

router.get('/orders', orderController.getAllOrders);   
router.get('/order/id/', orderController.getOrderById);
router.post('/order/add/', orderController.addOrder);
router.put('/order/', orderController.updateOrder);
router.delete('/order/', orderController.deleteOrder);


module.exports = {
    routes: router
}