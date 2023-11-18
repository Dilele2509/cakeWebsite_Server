'use strict';

const express = require('express');
const userController = require('../controllers/userController');   
const router = express.Router();

router.get('/users', userController.getAllUsers);   //use for admin
router.get('/user/id/', userController.getUserById);
router.post('/user/add/', userController.addUser);
router.put('/user/info/', userController.updateUser);
router.put('/user/security/', userController.updateUserPassword);
router.put('/user/avatar/', userController.updateUserAva);
router.delete('/user/', userController.deleteUser);


module.exports = {
    routes: router
}