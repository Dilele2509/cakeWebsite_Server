'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


const checkLogin = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('login/sql');
        //console.log(sqlQueries);
        const check = await pool.request()
            .input('email', sql.VarChar, data.email)
            .input('password', sql.NVarChar(10), data.password) 
            .query(sqlQueries.checkLogin);

        return check.recordset[0].Result;
    } catch (error) {
        return error.message;
    }
}

const checkPassword = async (password) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('login/sql');
        const check = await pool.request()
                        .input('password', sql.VarChar, password)
                        .query(sql.checkPassword);
        return check.recordset[0].Result;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    checkLogin,
    checkPassword
}