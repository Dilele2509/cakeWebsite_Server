'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


/* viết các hàm tương tự bên roles/index.js */
const getProduct = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products/sql');
        console.log(sqlQueries);
        const productList = await pool.request().query(sqlQueries.productList);
        return productList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getProductById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByCat = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products/sql');
        const event = await pool.request()
                            .input('category_id', sql.Int, data.category_id)
                            .query(sqlQueries.getProductByCat);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createProduct = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products/sql');
        const insert = await pool.request()
                            .input('category_id', sql.Int, data.category_id)
                            .input('title', sql.NVarChar(50), data.title)
                            .input('price', sql.Float, data.price)
                            .input('size', sql.NVarChar(50), data.size)
                            .input('size_price', sql.Float, data.size_price)
                            .input('ingredients', sql.Text, data.ingredients)
                            .input('discount_price', sql.Float, data.discount_price)
                            .input('thumbnail', sql.NVarChar(50), data.thumbnail)
                            .input('description', sql.Text, data.description)
                            .input('quantity', sql.Int, data.quantity)
                            .input('total', sql.Float, data.total)
                            .input('deleted', sql.TinyInt, data.deleted)
                            .query(sqlQueries.createProduct);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateProduct = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('category_id', sql.Int, data.category_id)
                        .input('title', sql.NVarChar(50), data.title)
                        .input('price', sql.Float, data.price)
                        .input('size', sql.NVarChar(50), data.size)
                        .input('size_price', sql.Float, data.size_price)
                        .input('ingredients', sql.NVarChar(50), data.ingredients)
                        .input('discount_price', sql.Float, data.discount_price)
                        .input('thumbnail', sql.NVarChar(50), data.thumbnail)
                        .input('description', sql.NVarChar(sql.MAX), data.description)
                        .input('quantity', sql.Int, data.quantity)
                        .input('total', sql.Float, data.total)
                        .input('deleted', sql.TinyInt, data.deleted)
                        .query(sqlQueries.updateProduct);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateSizeProduct = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products/sql');
        console.log(sqlQueries.updateSize);
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('size', sql.NVarChar(50), data.size)
                        .query(sqlQueries.updateSize);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteProduct = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteProduct);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getProduct,
    getById,
    getByCat,
    createProduct,
    updateProduct,
    updateSizeProduct,
    deleteProduct
}