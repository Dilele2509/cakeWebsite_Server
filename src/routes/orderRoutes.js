'use strict';

const express = require('express');
const orderController = require('../controllers/orderController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/orders', orderController.getAllOrders);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/order/', orderController.getOrderById);
router.post('/order/', orderController.addOrder);
router.put('/order/', orderController.updateOrder);
router.delete('/order/', orderController.deleteOrder);


module.exports = {
    routes: router
}