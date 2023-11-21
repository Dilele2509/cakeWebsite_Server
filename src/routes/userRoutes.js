'use strict';

const express = require('express');
const userController = require('../controllers/userController');   
const router = express.Router();

router.get('/users', userController.getAllUsers);   //use for admin
router.get('/user/id/', userController.getUserById);
router.post('/user/add/', userController.addUser);
router.put('/user/info/', userController.updateUser); //for user/admin update them self
router.put('/user/update/', userController.updateUserInfo);  //for admin update user's info
router.put('/user/security/', userController.updateUserPassword);
router.put('/user/avatar/', userController.updateUserAva);
router.put('/user/disable', userController.deleteUser);    //update deleted = 1
router.put('/user/enable', userController.enableUser); //use for admin enable user


module.exports = {
    routes: router
}