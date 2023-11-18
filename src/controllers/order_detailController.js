'use strict';

const orderdetailData = require('../data/order_details');


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
        const user_id = req.cookies.userId;
        const orderdetail = await orderdetailData.getById(user_id,data);
        console.log(orderdetail, data);
        res.send(orderdetail);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addOrderdetail = async (req, res, next) => {
    try {
        const data = req.body;
        const user_id = req.cookies.userId;
        const checkProExist = await orderdetailData.checkProExist(user_id,data);
        if(checkProExist === 1){
            //console.log('update');
            const updateQuant = await orderdetailData.updateQuantIfExist(user_id,data);
            res.send(updateQuant);
        }else{
            //console.log('insert');
            const insert = await orderdetailData.createOrderdetail(user_id,data);
            res.send(insert);
        }
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

/* const updateOrderId = async(req, res, next) =>{
    try {
        const user_id = req.cookies.userId;
        const order_id = req.body.order_id;
        const updated = await orderdetailData.updateOrderId(user_id, order_id);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
} */

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