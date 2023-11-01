'use strict';

const express = require('express');
const userController = require('../controllers/userController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/users', userController.getAllRoles);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/user/', userController.getRoleById);
router.post('/user/', userController.addRole);
router.put('/user/', userController.updateRole);
router.delete('/user/', userController.deleteRole);


module.exports = {
    routes: router
}