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

const uploadAvatar = async (req, res, next) =>{
    try {
        const userId = req.body.userId;
        // Check if file is uploaded
        if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded' });
        }
    
        // Get the file path
        const filePath = 'public/assets/images/' + req.file?.filename;
        const result = await userData.updateUserAva(userId, filePath);
    
        // Send the response
        res.status(200).json({ message: 'Avatar uploaded successfully', user: result });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
      }
}

const resetPassword = async(req, res, next) =>{
    try {
        const {email, password} = req.body;
        const reset = await userData.resetPassword(email, password);
        res.send(reset);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.cookies.userId;
        const updated = await userData.updateUser(id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUserInfo = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await userData.updateUserInfo(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUserPassword = async(req, res, next) =>{
    try {
        const password = req.body.password;
        const id = req.cookies.userId;
        const updated = await userData.updateUserPassword(id, password);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const id = req.body.id;
        const deleted = await userData.deleteUser(id);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const enableUser = async (req, res, next)=>{
    try {
        const id = req.body.id;
        const enable = await userData.enableUser(id);
        res.send(enable);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const removeAdmin = async(req, res, next)=>{
    try {
        const id = req.body.id;
        const remove = await userData.removeAdmin(id);
        res.send(remove);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    updateUserInfo,
    updateUserPassword,
    resetPassword,
    uploadAvatar,
    deleteUser,
    enableUser,
    removeAdmin
}