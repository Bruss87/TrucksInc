const Package = require('../models/package').Package;
const Truck  = require('../models/truck').Truck;

const sequelize = require('sequelize');

const findTruckById = (id) => {
return Truck.findOne({
    where: {
        id
    }
});
};

const getAllTrucks = async (req, res) => {
    try {
        const trucks = await Truck.findAll({})
        return res.status(200).send(trucks)
    } catch (err) { console.log(err) }
       return res.status(500).send(err)
};
const getTruckById = async (req, res) => {
    try {
        const { id } = req.params
        const truck = await findTruckById(id);
       return res.status(200).send(truck)
    } catch (err) { console.log(err) }
    return res.status(500).send(err)
};

const createNewTruck = async (req, res) => {
    try {
        const { weight, loadVolume, loaded_package_ids } = req.body;
        await Truck.create({weight, loadVolume, loaded_package_ids});
        return res.status(200).json({
            "message": "Truck created"
        });
    } catch (err) { console.log(err) }
    return res.status(500).send(err)
};

const deleteTruck = async (req, res) => {
    try{
        const id = req.params.id
        await Truck.destroy({
            where:{
                id
            }
        })
        return res.status(200).json({
            "message": `Truck ${id} deleted`
        })
    } catch (err) { console.log(err) }
   return res.status(500).send(err)
};

const loadTruck = async (req,res) => { 
    try {
        const { id } = req.params
        const truck = await findTruckById(id);
        const { packageId } = req.body;
        const package = await Package.findOne({where: {id: packageId}})
        const currentTrucksWeight = truck.weight;
        const updatedTrucksWeight = currentTrucksWeight + package.weight;

        await package.update({truck_id: id })
        await truck.update({  weight: updatedTrucksWeight, loaded_package_ids: sequelize.fn('array_append', sequelize.col('loaded_package_ids'), packageId)})
        return res.status(200).json({ status: 'ok' })
    } catch(err) {console.log(err)}
    return res.status(500).send(err)
};

const unloadTruck = async (req, res) => {
    try{
        const { id } = req.params
        const truck = await findTruckById(id);
        const { packageId } = req.body;
        const package = await Package.findOne({where: {id: packageId}});
        await package.update({truck_id: null, last_truck_id: id });
        await truck.update({loaded_package_ids:  sequelize.fn('array_remove', sequelize.col('loaded_package_ids'), packageId)});
        return res.status(200).json({ status: 'ok' })
    } catch(err) {console.log(err)}
    return res.status(500).send(err)
}

const getTrucksWeight = async ( req, res) => {
    try{
        const { id } = req.params
        const truck = await findTruckById(id);
        return res.status(200).json(truck.weight)
    } catch(err) {console.log(err)}
    return res.status(500).send(err)
};


module.exports = {
    getAllTrucks,
    getTruckById,
    createNewTruck,
    deleteTruck,
    loadTruck,
    getTrucksWeight,
    unloadTruck
};