'use strict';

const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.post('/login', loginController.checkLogin);
router.get('/login/check-status/', loginController.checkLoginStatus);


module.exports = {
    routes: router
}