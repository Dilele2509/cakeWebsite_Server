'use strict';

const managalData = require('../data/manage_gallery');

/* viết hàm tương tự với roleController */
const getAllManagals = async (req, res, next) => {
    try {

        const managalList = await managalData.getManagal();
        //console.log(rolelist)
        res.send(managalList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getManagalById = async (req, res, next) => {
    try {
        const data = req.body;
        const managal = await managalData.getById(data);
        console.log(managal, data);
        res.send(managal);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addManagal = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await managalData.createManagal(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateManagal = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await managalData.updateManagal(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteManagal = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await managalData.deleteManagal(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    /* viết xong r export nó ra đây */
    getAllManagals,
    getManagalById,
    addManagal,
    updateManagal,
    deleteManagal
}