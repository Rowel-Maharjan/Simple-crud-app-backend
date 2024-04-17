const product = require("../models/product.models");

//Create Product
const createProducts = async (req, res) => {
    try {
        const Product = await product.create(req.body)
        res.status(200).json(Product);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Get all the product
const getProducts = async (req, res) => {
    try {
        const Product = await product.find();
        res.status(200).json(Product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get one product
const getProduct = async (req, res) => {
    try {
        const Product = await product.findById(req.params.id)
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Updtate product
const updateProduct = async (req, res) => {
    try {
        const Product = await product.findByIdAndUpdate(req.params.id, req.body)

        if (!Product) {
            return res.status(404).json({ message: "Product Not Found" })
        }

        const UpdatedProduct = await product.findById(req.params.id);
        res.status(200).json(UpdatedProduct)


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const Product = await product.findByIdAndDelete(req.params.id);

        if (!Product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json({ message: "Product Deleted Successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {
    createProducts,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}