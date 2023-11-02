'use strict';

const express = require('express');
const feedbackController = require('../controllers/feedbackController');    //đối với các file khác thì nhớ sửa lại
const router = express.Router();

router.get('/feedbacks', feedbackController.getAllFeedbacks);   //nhớ sửa lại các tên hàm sau dấu chấm tương ứng với tên hàm mình đặt bên controller
router.get('/feedback/', feedbackController.getFeedbackById);
router.post('/feedback/', feedbackController.addFeedback);
router.put('/feedback/', feedbackController.updateFeedback);
router.delete('/feedback/', feedbackController.deleteFeedback);


module.exports = {
    routes: router
}