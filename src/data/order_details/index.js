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
//sử dụng hàm này sau khi đã có đăng nhập
/* const createOrderdetail = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        
        // Trước hết, thực hiện kiểm tra xem dữ liệu đã tồn tại hay chưa
        const checkData = await pool.request()
            .input('user_id', sql.Int, data.user_id) 
            .input('product_id', sql.Int, data.product_id)
            .input('product_size', sql.NVarChar, data.product_size)
            .query(sqlQueries.checkODExist);
    
        console.log('check data output:',checkData.recordset.length);

        if (checkData.recordset.length > 0) {
            // Dữ liệu đã tồn tại, thực hiện UPDATE
            const update = await pool.request()
                .input('user_id', sql.Int, data.user_id)
                .input('product_id', sql.Int, data.product_id)
                .input('product_size', sql.NVarChar, data.product_size)
                .input('quantity', sql.Int, data.quantity)
                .query(sqlQueries.updateQuantIfExist);
            
            return update; 
        } else {
            // Dữ liệu chưa tồn tại, thực hiện INSERT
            const insert = await pool.request()
                .input('user_id', sql.Int, data.user_id)
                .input('product_id', sql.Int, data.product_id)
                .input('product_size', sql.NVarChar, data.product_size)
                .input('quantity', sql.Int, data.quantity)
                .query(sqlQueries.createOrderdetail);
            
            return insert; // 
        }
    } catch (error) {
        return error.message;
    }
} */
const createOrderdetail = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('order_details/sql');
        const insert = await pool.request()
                        .input('product_id', sql.Int, data.product_id)
                        .input('product_size', sql.NVarChar, data.product_size)
                        .input('price', sql.Float, data.price)
                        .input('quantity', sql.Int, data.quantity)
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
    createOrderdetail,
    updateOrderdetail,
    updateQuantOD,
    deleteOrderdetail
}