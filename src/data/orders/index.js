'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


const getOrder = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        //console.log(sqlQueries);
        const orderList = await pool.request().query(sqlQueries.orderList);
        return orderList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(user_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const event = await pool.request()
                        .input('user_id', sql.Int, user_id)
                        .query(sqlQueries.getOrderById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getOrderInfo = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const event = await pool.request()
                        .input('id', sql.Int, id)
                        .query(sqlQueries.getOrderInfo);
        return event.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getOrderStatus = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const status = await pool.request()
                        .input('id', sql.Int, id)
                        .query(sqlQueries.getStatus);
        return status.recordset[0].status;
    } catch (error) {
        console.log(error.message);
    }
}

const createOrder = async (user_id, order_date, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const insert = await pool.request()
                            .input('user_id', sql.Int, user_id)
                            .input('note', sql.NVarChar(50), data.note)
                            .input('receiver', sql.NVarChar(50), data.receiver)
                            .input('receiver_phone', sql.Char(10), data.receiver_phone)
                            .input('delivery_address', sql.NVarChar(sql.MAX), data.delivery_address)
                            .input('order_date', sql.DateTime, order_date)
                            .input('payment_method', sql.NVarChar(50), data.payment_method)
                            .input('transport_fee', sql.Float, data.transport_fee)
                            .input('status', sql.Int, 1)
                            .input('total', sql.Float, data.total)
                            .query(sqlQueries.createOrder);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateOrder = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('user_id', sql.Int, data.user_id)
                        .input('note', sql.NVarChar(50), data.note)
                        .input('receiver', sql.NVarChar(50), data.receiver)
                        .input('receiver_phone', sql.NChar(10), data.receiver_phone)
                        .input('delivery_address', sql.NVarChar(sql.MAX), data.delivery_address)
                        .input('order_date', sql.DateTime, data.order_date)
                        .input('payment_method', sql.NVarChar(50), data.payment_method)
                        .input('status', sql.Int, data.status)
                        .input('total', sql.Float, data.total)
                        .query(sqlQueries.updateOrder);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateQuantPay = async (product_id, user_id, order_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');

        const update = await pool.request()
            .input('order_id', sql.Int, order_id)
            .input('user_id', sql.Int, user_id)
            .input('product_id', sql.Int, product_id)
            .input('id', sql.Int, product_id)
            .query(sqlQueries.updateQuantPay);

        console.log('update quant recordset: ',update.recordset);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
};


const deleteOrder = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, id)
                            .query(sqlQueries.deleteOrder);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const checkQuantInStock = async (user_id, product_id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const quantity = await pool.request()
                            .input('user_id', sql.Int, user_id)
                            .input('product_id', sql.Int, product_id)
                            .query(sqlQueries.checkQuantInStock);
                            //console.log(quantity.recordset[0].Result);
        return quantity.recordset[0].Result;
    } catch (error) {
        return error.message;
    }
}

const returnProQuant = async (id, returnQuant) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const quantity = await pool.request()
                            .input('id', sql.Int, id)
                            .input('returnQuant', sql.Int, returnQuant)
                            .query(sqlQueries.returnProQuant);
                            //console.log(quantity.recordset);
        return quantity.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getOrder,
    getById,
    getOrderInfo,
    getOrderStatus,
    createOrder,
    updateOrder,
    updateQuantPay,
    deleteOrder, 
    checkQuantInStock,
    returnProQuant
}