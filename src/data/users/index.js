'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');

const getUser = async () => {
    try {
        let pool = await sql.connect(config.sql);
        //console.log(pool);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        console.log(sqlQueries);
        const userList = await pool.request().query(sqlQueries.userList);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const event = await pool.request()
                            .input('id', sql.Int, id)
                            .query(sqlQueries.getUserById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByEmail = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const event = await pool.request()
                            .input('email', sql.VarChar, data.email)
                            .query(sqlQueries.getUserByEmail);
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
                            .input('fullname', sql.NVarChar(50), data.fullname)
                            .input('email', sql.VarChar, data.email)
                            .input('password', sql.NVarChar(10), data.password)
                            .query(sqlQueries.createUser);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUser = async (id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const update = await pool.request()
                        .input('id', sql.Int, id)
                        .input('fullname', sql.NVarChar(50), data.fullname)
                        .input('gender', sql.NVarChar(50), data.gender)
                        .input('email', sql.VarChar, data.email)
                        .input('phone_num', sql.Char(10), data.phone_num)
                        .input('address', sql.NVarChar(50), data.address)
                        .query(sqlQueries.updateUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUserPassword = async(id, password)=>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const update = await pool.request()
                        .input('id', sql.Int, id)
                        .input('password', sql.NVarChar, password)
                        .query(sqlQueries.updatePassword)

        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUserAva = async (id, img) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const update = await pool.request()
            .input('id', sql.Int, id)
            .input('avatar', sql.NVarChar, img)
            .query(sqlQueries.updateUserAva);

        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const checkEmailExist = async(email) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const check = await pool.request()
                        .input('email', sql.VarChar, email)
                        .query(sqlQueries.checkEmailExist);

                        //console.log('check result: ',check);
        return check.recordset[0].Result;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, id)
                            .query(sqlQueries.deleteUser);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUser,
    getById,
    getByEmail,
    createUser,
    updateUser,
    updateUserPassword,
    updateUserAva,
    deleteUser,
    checkEmailExist
}