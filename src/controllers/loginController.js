'use strict';

const loginData = require('../data/login');
const userData = require('../data/users');


const checkLogin = async (req, res, next) => {
    try {
        const data = req.body;
        const check = await loginData.checkLogin(data);
        if(check === 1){
            const userInfo = await userData.getByEmail(data);
            return res.send(userInfo);
        }else{
            const checkEmail = await userData.checkEmailExist(data.email);
            const checkPassword = await loginData.checkPassword(data.password);
            if(checkEmail !== 1){
                return res.send({
                    status: 'OK',
                    message: 'This email does not exist'
                })
            }else if(checkPassword !== 1){
                return res.send({
                    status: 'OK',
                    message: 'Incorrect password'
                })
            }else{
                return res.send({
                    status: 'OK',
                    message: 'Have an error'
                })
            }
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    checkLogin
}