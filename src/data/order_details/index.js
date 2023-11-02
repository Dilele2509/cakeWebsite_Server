'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


/* viết các hàm tương tự bên roles/index.js */
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

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getOrderdetailById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createOrderdetail = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const insert = await pool.request()
                            .input('order_id', sql.Int, data.order_id)
                            .input('product_id', sql.Int, data.product_id)
                            .input('price', sql.Float, data.price)
                            .input('quantity', sql.Int, data.quantity)
                            .input('total', sql.Float, data.total)
                            .query(sqlQueries.createOrderdetail);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateOrderdetail = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('order_id', sql.Int, data.order_id)
                        .input('product_id', sql.Int, data.product_id)
                        .input('price', sql.Float, data.price)
                        .input('quantity', sql.Int, data.quantity)
                        .input('total', sql.Float, data.total)  
                        .query(sqlQueries.updateOrderdetail);
        return update.recordset;
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
    /* exports các hàm get, getById, create, update, delete tương tự như bên roles/index.js */
    getOrderdetail,
    getById,
    createOrderdetail,
    updateOrderdetail,
    deleteOrderdetail
}