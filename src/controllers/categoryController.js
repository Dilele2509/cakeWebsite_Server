'use strict';

const categoryData = require('../data/category');

/* viết hàm tương tự với roleController */
const getAllCategories = async (req, res, next) => {
    try {

        const categoryList = await categoryData.getCategory();
        //console.log(rolelist)
        res.send(categoryList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCategoryById = async (req, res, next) => {
    try {
        const data = req.body;
        const category = await categoryData.getById(data);
        console.log(category, data);
        res.send(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await categoryData.createCategory(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await categoryData.updateCategory(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await categoryData.deleteCategory(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    /* viết xong r export nó ra đây */
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory
}