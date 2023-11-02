'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


/* viết các hàm tương tự bên roles/index.js */
const getCategory = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category/sql');
        console.log(sqlQueries);
        const categoryList = await pool.request().query(sqlQueries.categoryList);
        return categoryList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getCategoryById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createCategory = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category/sql');
        const insert = await pool.request()
                            .input('name', sql.NVarChar(50), data.name)
                            .query(sqlQueries.createCategory);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateCategory = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('name', sql.NVarChar(50), data.name)
                        .query(sqlQueries.updateCategory);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteCategory = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('category/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteCategory);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    /* exports các hàm get, getById, create, update, delete tương tự như bên roles/index.js */
    getCategory,
    getById,
    createCategory,
    updateCategory,
    deleteCategory
}