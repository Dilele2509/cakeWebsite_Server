'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


/* viết các hàm tương tự bên roles/index.js */
const getOrder = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        console.log(sqlQueries);
        const orderList = await pool.request().query(sqlQueries.orderList);
        return orderList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getOrderById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createOrder = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const insert = await pool.request()
                            .input('user_id', sql.Int, data.user_id)
                            .input('note', sql.NVarChar(50), data.note)
                            .input('order_date', sql.DateTime, data.order_date)
                            .input('status', sql.Int, data.status)
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
                        .input('order_date', sql.DateTime, data.order_date)
                        .input('status', sql.Int, data.status)
                        .input('total', sql.Float, data.total)
                        .query(sqlQueries.updateOrder);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteOrder = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('orders/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteOrder);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    /* exports các hàm get, getById, create, update, delete tương tự như bên roles/index.js */
    getOrder,
    getById,
    createOrder,
    updateOrder,
    deleteOrder
}