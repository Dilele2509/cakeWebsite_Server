'use strict';

const express = require('express');
const managalController = require('../controllers/manage_galleryController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/managals', managalController.getAllManagals);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/managal/', managalController.getManagalById);
router.post('/managal/', managalController.addManagal);
router.put('/managal/', managalController.updateManagal);
router.delete('/managal/', managalController.deleteManagal);


module.exports = {
    routes: router
}