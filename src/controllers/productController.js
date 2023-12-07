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
        const id = insert[0].id;
        console.log('id get in insert: ', id);
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        
        }
        // Get the file path
        const filePath = 'public/assets/images/' + req.file?.filename;
        const result = await productData.updateProImg(id, filePath);
    
        // Send the response
        const combineRes = {
            status: 200,
            message: "Added successfully",
            image: result,
            insert: insert
        }
        res.send(combineRes);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const searchProduct = async (req, res, next) => {
    try {
        const title = req.body.title;
        const search = await productData.searchProduct(title);
        res.send(search);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const data = req.body;
        //console.log(req.body);
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
        const id = req.body.id;
        const deleted = await productData.deleteProduct(id);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const enableProduct = async (req, res, next) =>{
    try {
        const id = req.body.id;
        const enable = await productData.enableProduct(id);
        res.send(enable);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByCat,
    searchProduct,
    addProduct, 
    updateProduct, 
    updateSizeProduct,
    deleteProduct,
    enableProduct
}