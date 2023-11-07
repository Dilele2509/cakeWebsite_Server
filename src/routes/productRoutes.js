'use strict';

const express = require('express');
const productController = require('../controllers/productController');  
const router = express.Router();

router.get('/products', productController.getAllProducts);  
router.post('/product/id/', productController.getProductById);
router.post('/product/cat/', productController.getProductByCat);
router.post('/product/add/', productController.addProduct);
router.put('/product/', productController.updateProduct);
router.put('/product/size/', productController.updateSizeProduct);
router.delete('/product/', productController.deleteProduct);


module.exports = {
    routes: router
}