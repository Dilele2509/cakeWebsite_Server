'use strict';

const express = require('express');
const orderdetailController = require('../controllers/order_detailController');    
const router = express.Router();

router.get('/order-details', orderdetailController.getAllOrderdetails);   
router.get('/order-detail/id/', orderdetailController.getOrderdetailById);  //use for show in cart
router.post('/order-detail/order/id/', orderdetailController.getODInOrder);
router.post('/order-detail/manage/', orderdetailController.getODAdmin);
router.post('/order-detail/add/', orderdetailController.addOrderdetail);
router.put('/order-detail/', orderdetailController.updateOrderdetail);
router.put('/order-detail/quantity/', orderdetailController.updateQuantOD);
router.delete('/order-detail/', orderdetailController.deleteOrderdetail);


module.exports = {
    routes: router
}