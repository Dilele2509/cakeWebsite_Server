'use strict';

const roleData = require('../data/roles');

const getAllRoles = async (req, res, next) => {
    try {
        const rolelist = await roleData.getRole();
        //console.log(rolelist)
        res.send(rolelist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRoleById = async (req, res, next) => {
    try {
        const data = req.body;
        const role = await roleData.getById(data);
        console.log(role, data);
        res.send(role);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addRole = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await roleData.createRole(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRole = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await roleData.updateRole(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRole = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await roleData.deleteRole(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRoles,
    getRoleById,
    addRole,
    updateRole,
    deleteRole
}