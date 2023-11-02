'use strict';

const feedbackData = require('../data/feedbacks');

/* viết hàm tương tự với roleController */
const getAllFeedbacks = async (req, res, next) => {
    try {

        const feedbackList = await feedbackData.getFeedback();
        //console.log(rolelist)
        res.send(feedbackList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getFeedbackById = async (req, res, next) => {
    try {
        const data = req.body;
        const feedback = await feedbackData.getById(data);
        console.log(feedback, data);
        res.send(feedback);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addFeedback = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await feedbackData.createFeedback(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateFeedback = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await feedbackData.updateFeedback(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteFeedback = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await feedbackData.deleteFeedback(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    /* viết xong r export nó ra đây */
    getAllFeedbacks,
    getFeedbackById,
    addFeedback,
    updateFeedback,
    deleteFeedback
}