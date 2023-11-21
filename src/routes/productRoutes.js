'use strict';

const express = require('express');
const productController = require('../controllers/productController');  
const router = express.Router();

router.get('/products', productController.getAllProducts);  
router.post('/product/id/', productController.getProductById);
router.post('/product/cat/', productController.getProductByCat);
router.post('/product/add/', productController.addProduct);
router.put('/product/update/', productController.updateProduct);
router.put('/product/size/', productController.updateSizeProduct);
router.put('/product/disable/', productController.deleteProduct); //use for admin disable product
router.put('/product/enable/', productController.enableProduct);

module.exports = {
    routes: router
}