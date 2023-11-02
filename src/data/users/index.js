'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


/* viết các hàm tương tự bên roles/index.js */
const getUser = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        //console.log(sqlQueries);
        const userList = await pool.request().query(sqlQueries.userList);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getUserById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createUser = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const insert = await pool.request()
                            .input('role_id', sql.Int, data.role_id)
                            .input('fullname', sql.NVarChar(50), data.fullname)
                            .input('gender', sql.NVarChar(50), data.gender)
                            .input('email', sql.Char(50), data.email)
                            .input('phone_num', sql.Char(10), data.phone_num)
                            .input('address', sql.NVarChar(50), data.address)
                            .input('passwork', sql.NVarChar(10), data.passwork)
                            .input('deleted', sql.TinyInt, data.deleted)
                            .query(sqlQueries.createUser);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUser = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('role_id', sql.Int, data.role_id)
                        .input('fullname', sql.NVarChar(50), data.fullname)
                        .input('gender', sql.NVarChar(50), data.gender)
                        .input('email', sql.Char(50), data.email)
                        .input('phone_num', sql.Char(10), data.phone_num)
                        .input('address', sql.NVarChar(50), data.address)
                        .input('passwork', sql.NVarChar(10), data.passwork)
                        .input('deleted', sql.TinyInt, data.deleted)
                        .query(sqlQueries.updateUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteUser);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    /* exports các hàm get, getById, create, update, delete tương tự như bên roles/index.js */
    getUser,
    getById,
    createUser,
    updateUser,
    deleteUser
}