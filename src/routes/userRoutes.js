'use strict';

const express = require('express');
const userController = require('../controllers/userController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/users', userController.getAllUsers);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/user/', userController.getUserById);
router.post('/user/', userController.addUser);
router.put('/user/', userController.updateUser);
router.delete('/user/', userController.deleteUser);


module.exports = {
    routes: router
}