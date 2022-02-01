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
    unloadTruck,
    getLoadVolume
} = require('../controllers/Truck.js');


//package routes
router.get('/packages/all', getAllPackages);
router.get('/packages/:id', getPackageById);
router.post('/packages/create', createNewPackage);
router.delete('/packages/delete/:id', deletePackage);


//truck routes
router.get('/trucks/all', getAllTrucks);
router.get('/trucks/:id', getTruckById);
router.post('/trucks/create', createNewTruck);
router.delete('/trucks/delete/:id', deleteTruck);
router.put('/trucks/loadTruck/:id', loadTruck);
router.get('/trucks/weight/:id', getTrucksWeight);
router.put('/trucks/unloadTruck/:id', unloadTruck);
router.get('/trucks/loadVolume/:id', getLoadVolume);

module.exports = {
    router
};