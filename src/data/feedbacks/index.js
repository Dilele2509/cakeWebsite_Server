'use strict';
const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');


/* viết các hàm tương tự bên roles/index.js */
const getFeedback = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedbacks/sql');
        console.log(sqlQueries);
        const feedbackList = await pool.request().query(sqlQueries.feedbackList);
        return feedbackList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedbacks/sql');
        const event = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.getFeedbackById);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const createFeedback = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedbacks/sql');
        const insert = await pool.request()
                            .input('user_id', sql.Int, data.user_id)
                            .input('fullname', sql.NVarChar(50), data.fullname)
                            .input('email', sql.NVarChar(50), data.email)
                            .input('phone_number', sql.Char(10), data.phone_number)
                            .input('note', sql.NVarChar(sql.MAX), data.note)
                            .query(sqlQueries.createFeedback);                            
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateFeedback = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedbacks/sql');
        const update = await pool.request()
                        .input('id', sql.Int, data.id)
                        .input('user_id', sql.Int, data.user_id)
                        .input('fullname', sql.NVarChar(50), data.fullname)
                        .input('email', sql.NVarChar(50), data.email)
                        .input('phone_number', sql.Char(10), data.phone_number)
                        .input('note', sql.NVarChar(sql.MAX), data.note)
                        .query(sqlQueries.updateFeedback);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteFeedback = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedbacks/sql');
        const deleteEvent = await pool.request()
                            .input('id', sql.Int, data.id)
                            .query(sqlQueries.deleteFeedback);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    /* exports các hàm get, getById, create, update, delete tương tự như bên roles/index.js */
    getFeedback,
    getById,
    createFeedback,
    updateFeedback,
    deleteFeedback
}