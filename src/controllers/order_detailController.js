'use strict';

const orderdetailData = require('../data/order_details');

/* viết hàm tương tự với roleController */
const getAllOrderdetails = async (req, res, next) => {
    try {

        const orderdetailList = await orderdetailData.getOrderdetail();
        //console.log(rolelist)
        res.send(orderdetailList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOrderdetailById = async (req, res, next) => {
    try {
        const data = req.body;
        const orderdetail = await orderdetailData.getById(data);
        console.log(orderdetail, data);
        res.send(orderdetail);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addOrderdetail = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await orderdetailData.createOrderdetail(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateOrderdetail = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await orderdetailData.updateOrderdetail(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateQuantOD = async(req, res, next)=>{
    try {
        const data = req.body;
        const updated = await orderdetailData.updateQuantOD(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteOrderdetail = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await orderdetailData.deleteOrderdetail(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllOrderdetails,
    getOrderdetailById,
    addOrderdetail,
    updateOrderdetail,
    updateQuantOD,
    deleteOrderdetail
}