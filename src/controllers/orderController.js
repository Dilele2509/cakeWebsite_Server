'use strict';

const orderData = require('../data/orders');

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

const getOrderById = async (req, res, next) => {
    try {
        const data = req.body;
        const order = await orderData.getById(data);
        console.log(order, data);
        res.send(order);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addOrder = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await orderData.createOrder(data);
        res.send(insert);
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