'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


/* viết các hàm tương tự bên roles/index.js */
const getManagal = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('manage_gallery/sql');
        console.log(sqlQueries);
        const managalList = await pool.request().query(sqlQueries.managalList);
        return managalList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('manage_gallery/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getManagalById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createManagal = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('manage_gallery/sql');
        const insert = await pool.request()
                            .input('product_id', sql.Int, data.product_id)
                            .input('thumbnail', sql.NVarChar(50), data.thumbnail)
                            .query(sqlQueries.createManagal);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateManagal = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('manage_gallery/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('product_id', sql.Int, data.product_id)
                        .input('thumbnail', sql.NVarChar(50), data.thumbnail)
                        .query(sqlQueries.updateManagal);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteManagal = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('manage_gallery/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteManagal);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    /* exports các hàm get, getById, create, update, delete tương tự như bên roles/index.js */
    getManagal,
    getById,
    createManagal,
    updateManagal,
    deleteManagal
}