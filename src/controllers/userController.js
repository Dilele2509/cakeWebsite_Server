'use strict';

const userData = require('../data/users');

const getAllUsers = async (req, res, next) => {
    try {

        const userList = await userData.getUser();
        //console.log(userList)
        res.send(userList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUserById = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await userData.getById(data);
        console.log(user, data);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await userData.createUser(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await userData.updateUser(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await userData.deleteUser(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}