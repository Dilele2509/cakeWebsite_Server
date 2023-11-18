'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


const getOrderdetail = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        console.log(sqlQueries);
        const orderdetailList = await pool.request().query(sqlQueries.orderdetailList);
        return orderdetailList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

/* get order_detail by user id/ get cart */
const getById = async(user_id,data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const event = await pool.request()
                            .input('user_id', sql.Int, user_id)
                            .query(sqlQueries.getOrderdetailById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const checkProExist = async (user_id,data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        console.log('user_id: ',user_id);
        console.log('product_id: ',data.product_id);
        console.log('product_size: ',data.product_size);
        const checkData = await pool.request()
            .input('user_id', sql.Int, user_id) 
            .input('product_id', sql.Int, data.product_id)
            .input('product_size', sql.NVarChar, data.product_size)
            .query(sqlQueries.checkODExist);
        return checkData.recordset[0].Result;
    } catch (error) {
        return error.message;
    }
}

const updateQuantIfExist = async (user_id,data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
    
        const update = await pool.request()
                    .input('user_id', sql.Int, user_id)
                    .input('product_id', sql.Int, data.product_id)
                    .input('product_size', sql.NVarChar, data.product_size)
                    .input('quantity', sql.Int, data.quantity)
                    .query(sqlQueries.updateQuantIfExist);
                
        return update; 
    } catch (error) {
        return error.message;
    }
}

const createOrderdetail = async (user_id,data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');

        const insert = await pool.request()
            .input('user_id', sql.Int, user_id)
            .input('product_id', sql.Int, data.product_id)
            .input('product_size', sql.NVarChar, data.product_size)
            .input('price', sql.Float, data.price)
            .input('quantity', sql.Int, data.quantity)
            .query(sqlQueries.createOrderdetail);
        
        return insert; 
        
    } catch (error) {
        return error.message;
    }
}

const updateOrderdetail = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const update = await pool.request()
                        .input('product_id', sql.Int, data.product_id)
                        .input('product_size', sql.NVarChar, data.product_size)
                        .input('price', sql.Float, data.price)
                        .input('quantity', sql.Int, data.quantity)
                        .query(sqlQueries.updateOrderdetail);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateQuantOD = async(data)=>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('quantity', sql.Int, data.quantity)
                        .query(sqlQueries.updateQuantOD);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateOrderId = async (user_id, order_id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const updated = await pool.request()
                        .input('user_id', sql.Int, user_id)
                        .input('order_id', sql.Int, order_id)
                        .query(sqlQueries.updateOrderId);
        return updated.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteOrderdetail = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteOrderdetail);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getOrderdetail,
    getById,
    checkProExist,
    updateQuantIfExist,
    createOrderdetail,
    updateOrderdetail,
    updateQuantOD,
    updateOrderId,
    deleteOrderdetail
}