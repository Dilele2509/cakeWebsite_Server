'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


const getRole = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles/sql');
        //console.log(sqlQueries);
        const roleList = await pool.request().query(sqlQueries.roleList);
        return roleList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getRoleById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createRole = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles/sql');
        const insert = await pool.request()
                            .input('role_name', sql.NVarChar(100), data.role_name)
                            .query(sqlQueries.createRole);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateRole = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('role_name', sql.NVarChar, data.role_name)
                        .query(sqlQueries.updateRole);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteRole = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteRole);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getRole,
    getById,
    createRole,
    updateRole,
    deleteRole
}