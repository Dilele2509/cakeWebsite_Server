'use strict';

const express = require('express');
const orderdetailController = require('../controllers/order_detailController');    
const router = express.Router();

router.get('/order-details', orderdetailController.getAllOrderdetails);   
router.post('/order-detail/id/', orderdetailController.getOrderdetailById);
router.post('/order-detail/add/', orderdetailController.addOrderdetail);
router.put('/order-detail/', orderdetailController.updateOrderdetail);
router.put('/order-detail/quantity/', orderdetailController.updateQuantOD);
router.delete('/order-detail/', orderdetailController.deleteOrderdetail);


module.exports = {
    routes: router
}