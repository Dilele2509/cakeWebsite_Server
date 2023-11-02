'use strict';

const express = require('express');
const productController = require('../controllers/productController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/products', productController.getAllProducts);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/product/', productController.getProductById);
router.post('/product/', productController.addProduct);
router.put('/product/', productController.updateProduct);
router.delete('/product/', productController.deleteProduct);


module.exports = {
    routes: router
}