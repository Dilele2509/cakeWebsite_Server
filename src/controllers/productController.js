'use strict';

const productData = require('../data/products');

const getAllProducts = async (req, res, next) => {
    try {

        const productList = await productData.getProduct();
        //console.log(rolelist)
        res.send(productList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProductById = async (req, res, next) => {
    try {
        const data = req.body;
        const product = await productData.getById(data);
        //console.log(product, data);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProductByCat = async (req, res, next) => {
    try {
        const data = req.body;
        const product = await productData.getByCat(data);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await productData.createProduct(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await productData.updateProduct(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateSizeProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await productData.updateSizeProduct(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const deleted = await productData.deleteProduct(data);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByCat,
    addProduct, 
    updateProduct, 
    updateSizeProduct,
    deleteProduct
}