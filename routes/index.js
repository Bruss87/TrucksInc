const express = require('express');
const router = express.Router();
const { 
    getAllPackages,
    getPackageById,
    createNewPackage,
    deletePackage
 } = require("../controllers/Package.js");
 

 
// Route get all packages
router.get('/packages/all', getAllPackages);
// Route get product by id
router.get('/packages/:id', getPackageById);
// Route create a new product
router.post('/packages/create', createNewPackage);
// Route delete product by id
router.delete('/packages/:id', deletePackage);

module.exports = {
    router
}