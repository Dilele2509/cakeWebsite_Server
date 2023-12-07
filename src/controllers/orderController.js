'use strict';
const moment = require('moment-timezone');
const orderData = require('../data/orders');
const order_detailData = require('../data/order_details');


const getAllOrders = async (req, res, next) => {
    try {

        const orderList = await orderData.getOrder();
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

const getOrderInfo = async (req, res, next) => {
    try {
        const id = req.body.id
        const order = await orderData.getOrderInfo(id);
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
        const data = req.body;
        const proId = await order_detailData.getProIdInCart(user_id);

        // Use Promise.all to wait for all promises to resolve
        const checkQuantResults = await Promise.all(
            proId.map(async (item) => {
                return orderData.checkQuantInStock(user_id, item.product_id);
            })
        );

        //console.log('checkQuantResults: ', checkQuantResults);

        // Check if any result is 0 (quantity in stock not enough)
        if (checkQuantResults.some((result) => result === 0)) {
            return res.send({
                status: 'Error',
                message: 'Quantity in stock is not enough, cannot buy',
            });
        } else{
            // IF CHECK SUCCESS:
            const currentDate = new Date();
            const order_date = moment(currentDate).tz('Asia/Ho_Chi_Minh', true).format();
            const insert = await orderData.createOrder(user_id, order_date, data);
            const orderId = insert[0].id;
            // Add update orderId for order detail
            const updateOrderId = await order_detailData.updateOrderId(user_id, orderId);
    
            // Update quantity in product after payment
            const updateQuantResult = await Promise.all(
                proId.map(async (item) => {
                    console.log('proId when update quant: ', item.product_id);
                    return orderData.updateQuantPay(item.product_id, user_id, orderId);
                })
            );
    
            // Combine both responses into a single object
            const combinedResponse = {
                status: 'Success',
                insertResponse: insert,
                updateOrderIdResponse: updateOrderId,
                updateQuantResponse: updateQuantResult
            };
            //console.log(combinedResponse);
            // Send the combined response
            res.send(combinedResponse);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
};



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
        const id = req.body.id;
        const status = await orderData.getOrderStatus(id);
        if(status > 2 && status <= 4){
            return res.send({
                status: 'Error',
                message: 'Cancellation is not possible, the order has been handed over to the shipping unit'
            })
        } else if(status === 0){
            return res.send({
                status: 'Error',
                message: 'Can not cancel the order that be canceled'
            })
        } else if(status <= 2){
            const deleted = await orderData.deleteOrder(id);
            const getOrderQuantList = await order_detailData.getOrderQuantInOrder(id);
            const returnQuant = await Promise.all(
                getOrderQuantList.map(async (item) => {
                    return orderData.returnProQuant(item.product_id, item.orderQuant);
                })
            );
            const combinedResponse = {
                deleteRes: deleted,
                returnQuantRes: returnQuant
            }
            res.send(combinedResponse);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    getOrderInfo,
    addOrder,
    updateOrder,
    deleteOrder
}