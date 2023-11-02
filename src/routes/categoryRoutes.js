'use strict';

const express = require('express');
const categoryController = require('../controllers/categoryController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/categories', categoryController.getAllCategories);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/category/', categoryController.getCategoryById);
router.post('/category/', categoryController.addCategory);
router.put('/category/', categoryController.updateCategory);
router.delete('/category/', categoryController.deleteCategory);


module.exports = {
    routes: router
}