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

const getUserById = async (req, res) => {
    try {
        // Get userId from the cookie
        const userId = req.cookies.userId;

        // Check if userId is available
        if (!userId) {
            return res.status(401).send({
                status: 'Error',
                message: 'User ID not found in the cookie'
            });
        }
        // Get user information based on userId
        const user = await userData.getById(userId);

        if (!user) {
            return res.status(404).send({
                status: 'Error',
                message: 'User not found'
            });
        }
        // Send user information in the response
        return res.send({
            status: 'OK',
            user: user
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addUser = async (req, res, next) => {
    
    try {
        const data = req.body;
        const checkExist = await userData.checkEmailExist(data.email)
        //console.log('check email exist: ', checkExist);

        if(checkExist != 1){
            const insert = await userData.createUser(data);
            res.send(insert);
        }else {
            res.send({
                status: 'Error',
                message: 'This is email already exists'
            })
        }
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