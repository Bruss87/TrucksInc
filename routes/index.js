const express = require('express');
const router = express.Router();
const { 
    getAllPackages,
    getPackageById,
    createNewPackage,
    deletePackage,
 } = require("../controllers/Package.js");
 
const {
    getAllTrucks,
    getTruckById,
    createNewTruck,
    deleteTruck,
    loadTruck,
    getTrucksWeight,
    unloadTruck
} = require('../controllers/Truck.js');
 
// Route get all packages
router.get('/packages/all', getAllPackages);
// Route get product by id
router.get('/packages/:id', getPackageById);
// Route create a new product
router.post('/packages/create', createNewPackage);
// Route delete product by id
router.delete('/packages/delete/:id', deletePackage);

router.get('/trucks/all', getAllTrucks);
router.get('/trucks/:id', getTruckById);
router.post('/trucks/create', createNewTruck);
router.delete('/trucks/delete/:id', deleteTruck);
router.post('/trucks/loadTruck/:id', loadTruck);
router.get('/trucks/weight/:id', getTrucksWeight);
router.post('/trucks/unloadTruck/:id', unloadTruck);
module.exports = {
    router
}