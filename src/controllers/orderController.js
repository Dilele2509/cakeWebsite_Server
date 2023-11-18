'use strict';
const moment = require('moment-timezone');
const orderData = require('../data/orders');
const order_detailData = require('../data/order_details');

/* viết hàm tương tự với roleController */
const getAllOrders = async (req, res, next) => {
    try {

        const orderList = await orderData.getOrder();
        //console.log(rolelist)
        res.send(orderList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//get by user id/ use for fetch all orders that user ordered
const getOrderById = async (req, res, next) => {
    try {
        const id = req.cookies.userId;
        const order = await orderData.getById(id);
        //console.log(order, data);
        res.send(order);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//add by user, when user checkout
const addOrder = async (req, res, next) => {
    try {
        const user_id = req.cookies.userId;
        
        // Get current date and time
        const currentDate = new Date();

        // Convert to Vietnam time zone (Indochina Time - ICT)
        //const options = { timeZone: 'Asia/Ho_Chi_Minh', keepLocalTime: true };
        const order_date = moment(currentDate).tz('Asia/Ho_Chi_Minh', true).format();

        const data = req.body;
        const insert = await orderData.createOrder(user_id, order_date, data);
        const orderId = insert[0].id;

        // Add update orderId for order detail
        const updateOrderId = await order_detailData.updateOrderId(user_id, orderId);

        // Combine both responses into a single object
        const combinedResponse = {
            insertResponse: insert,
            updateOrderIdResponse: updateOrderId
        };

        // Send the combined response
        res.send(combinedResponse);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const updateOrder = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await orderData.updateOrder(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteOrder = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await orderData.deleteOrder(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    /* viết xong r export nó ra đây */
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder
}