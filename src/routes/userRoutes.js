'use strict';

const express = require('express');
const userController = require('../controllers/userController');   
const router = express.Router();

router.get('/users', userController.getAllUsers);   
router.post('/user/id/', userController.getUserById);
router.post('/user/add/', userController.addUser);
router.put('/user/', userController.updateUser);
router.delete('/user/', userController.deleteUser);


module.exports = {
    routes: router
}