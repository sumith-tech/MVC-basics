const path = require("path");

const express = require("express");

const productControler = require("../controllers/products");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productControler.getAddproduct);

// /admin/add-product => POST
router.post("/add-product", productControler.postAddproduct);

module.exports = router;
