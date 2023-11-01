'use strict';

const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();

router.get('/roles', roleController.getAllRoles);
router.get('/role/', roleController.getRoleById);
router.post('/role', roleController.addRole);
router.put('/role/', roleController.updateRole);
router.delete('/role/', roleController.deleteRole);


module.exports = {
    routes: router
}