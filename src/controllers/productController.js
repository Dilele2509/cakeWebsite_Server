'use strict';

const productData = require('../data/products'); //đổi tên biến tương tự với tên file tương ứng

/* viết hàm tương tự với roleController */
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
        console.log(product, data);
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
    /* viết xong r export nó ra đây */
    getAllProducts,
    getProductById,
    addProduct, 
    updateProduct, 
    deleteProduct
}