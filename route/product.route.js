const express = require("express");
const product = require("../models/product.models");
const { createProducts, getProduct, updateProduct, deleteProduct, getProducts } = require("../controllers/product.controller");
const router = express.Router();


//Create the products
router.post("/", createProducts);

//Get all the product
router.get("/", getProducts)

//Get One product at a time
router.get("/:id", getProduct)

//Update API
router.put("/:id", updateProduct)


//Delete API
router.delete("/:id", deleteProduct)

module.exports = router
