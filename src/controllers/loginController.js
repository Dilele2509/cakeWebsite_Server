'use strict';
const nodemailer = require('nodemailer');
const loginData = require('../data/login');
const userData = require('../data/users');


const checkLogin = async (req, res, next) => {
    try {
        const data = req.body;
        const check = await loginData.checkLogin(data);
        if(check === 1){
            const userInfo = await userData.getByEmail(data);
            //console.log(userInfo[0].id);
            // Set the user ID in a cookie
            res.cookie('userId', userInfo[0].id,{ httpOnly: true });
            return res.send(userInfo);
        }else{
            const checkEmail = await userData.checkEmailExist(data.email);
            const checkPassword = await loginData.checkPassword(data.password);
            if(checkEmail !== 1){
                return res.send({
                    status: 'Error',
                    problem: 'Email',
                    message: 'This email does not exist'
                })
            }else if(checkPassword !== 1){
                return res.send({
                    status: 'Error',
                    problem: 'Password',
                    message: 'Incorrect password'
                })
            }else{
                return res.send({
                    status: 'Error',
                    message: 'Have an error'
                })
            }
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const checkLoginStatus = async (req, res, next) => {
    const userId = req.cookies.userId;
    // Check if userId is present in the cookie
    if(userId){
        res.send({
            status: true,
            message: 'logged'
        })
    }else{
        res.send({
            status: false,
            message: 'not logged in yet'
        })
    }
  
    next();
};

const forgotSendmail = async (req, res) => {
    const { to } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'levy3443@gmail.com',
            pass: 'yilxfskzbkifijpz'
            //pass: 'axzaintevseezvcc'
            // for react app: yilxfskzbkifijpz
            // for postman: axzaintevseezvcc
        }
    });

    async function getConfirmationCode() {
        const code = await loginData.confirmCode();
         
        let html = `<h2>This is the confirmation code to reset your password,</h2>
        <p>Please do not share this code with anyone.</p>
        <b style"display: block">Your confirmation code: <h4 style="color: red; display: inline-block">${code}</h4></b>
        <p>Thanks for giving us your feedback. If you need support, please contact via the link below:</p>
        <p>https://www.facebook.com/dhspkt.hcmute</p>
        <img style="max-width: 450px;" src='https://sectona.com/wp-content/uploads/2022/09/Password-Rotation-PAM-101-Featured-Image.png' alt='security-img'></img>`;
    
        return {html, code};
    }
    
    const subject = 'Password recovery confirmation code';
    getConfirmationCode().then(({html, code}) => {
        let mailOptions = {
            from: 'levy3443@gmail.com',
            to: to,
            subject: subject,
            html: html
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.cookie('confirm_code', code,{ httpOnly: true });
                res.status(200).send('Email sent: ' + info.response);
            }
        });
    });
    
}


const checkConfirmCode = async (req, res) =>{
    try {
        const code = req.cookies.confirm_code;
        const {inputCode} = req.body;
        const result = await loginData.checkConfirmCode(inputCode, code);
        //console.log('result in controller: ', typeof result);
        res.clearCookie('confirm_code');
        if(result === 1){
            return res.send({
                status: 'Success',
                result: result
            });
        }else{
            return res.send({
                status: 'Error',
                result: result
            });
        }
    } catch (error) {
        return error.message;
    }
}


const logout = (req, res, next) => {
    // Clear the userId cookie
    res.clearCookie('userId');
  
    res.send({
      status: true,
      message: 'Logged out successfully',
    });
  
    next();
  };

module.exports = {
    checkLogin,
    checkLoginStatus,
    forgotSendmail,
    logout,
    checkConfirmCode
}