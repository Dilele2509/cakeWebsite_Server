'use strict';

const express = require('express');
const orderdetailController = require('../controllers/order_detailController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/orderdetails', orderdetailController.getAllOrderdetails);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/orderdetail/', orderdetailController.getOrderdetailById);
router.post('/orderdetail/', orderdetailController.addOrderdetail);
router.put('/orderdetail/', orderdetailController.updateOrderdetail);
router.delete('/orderdetail/', orderdetailController.deleteOrderdetail);


module.exports = {
    routes: router
}