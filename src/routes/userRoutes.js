'use strict';

const express = require('express');
const userController = require('../controllers/userController');   
const router = express.Router();

router.get('/users', userController.getAllUsers);   
router.get('/user/', userController.getUserById);
router.post('/user/', userController.addUser);
router.put('/user/', userController.updateUser);
router.delete('/user/', userController.deleteUser);


module.exports = {
    routes: router
}