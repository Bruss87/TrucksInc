const Package = require('../models').Package;
const Truck  = require('../models').Truck;

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
    } catch (error) {
    return res.status(500).json({ error: error.message })};
};
const getTruckById = async (req, res) => {
    try {
        const { id } = req.params
        if(!id){return console.error(`Truck id ${id} not found`)};

        const truck = await findTruckById(id);
       return res.status(200).send({truck: truck})
    } catch (error){
        return res.status(500).json({ error: error.message });
}
};

const createNewTruck = async (req, res) => {
    try {
        const { weight, loaded_package_ids } = req.body;
        await Truck.create({weight, loaded_package_ids});
        return res.status(200).json({
            "message": "Truck created"
        });
    } catch (error) { 
        return res.status(500).json({ error: error.message });
    }
};

const deleteTruck = async (req, res) => {
    try{
        const id = req.params.id
        if(!id){return console.error(`Truck id ${id} not found`)};
        await Truck.destroy({
            where:{
                id
            }
        })
        return res.status(200).json({
            "message": `Truck ${id} deleted`
        })
    } catch (error) { 
        return res.status(500).json({ error: error.message });
    }
};

const loadTruck = async (req,res) => { 
    try {
        const { id } = req.params;
        if(!id){return console.error(`Truck id ${id} not found`)};
        const truck = await findTruckById(id);

        const { packageId } = req.body;
        if(!packageId){return console.error(`Package id ${packageId} not found`)};
        const parcel = await Package.findOne({where: {id: packageId}})

        const currentTrucksWeight = truck.weight;
        const updatedTrucksWeight = currentTrucksWeight + parcel.weight;
 
        if(parcel.truck_id !== null) {return console.error(`This parcel has already been loaded to truck: ${parcel.truck_id}`)};
        await truck.update({ weight: updatedTrucksWeight, loaded_package_ids: sequelize.fn('array_append', sequelize.col('loaded_package_ids'), packageId)});

        await parcel.update({truck_id: id, last_truck_id: null });
        return res.status(200).json({ status: 'ok' })
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
};

const unloadTruck = async (req, res) => {
    try{
        const { id } = req.params
        const truck = await findTruckById(id);
        if(!id){return console.error(`Truck id ${id} not found`)};

        const { packageId } = req.body;
        if(!packageId){return console.error(`Package id ${packageId} not found`)};
        const parcel = await Package.findOne({where: {id: packageId}});

        const currentTrucksWeight = truck.weight;
        const updatedTrucksWeight = currentTrucksWeight - parcel.weight;

        if(truck.loaded_package_ids.length === 0) {return console.error(`You cannot unload empty truck`)};
        await truck.update({loaded_package_ids:  sequelize.fn('array_remove', sequelize.col('loaded_package_ids'), packageId), weight: updatedTrucksWeight});

        await parcel.update({truck_id: null, last_truck_id: id });

        return res.status(200).json({ status: 'ok' })
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

const getTrucksWeight = async ( req, res) => {
    try{
        const { id } = req.params;
        if(!id){return console.error(`Truck id ${id} not found`)};
        const truck = await findTruckById(id);
        return res.status(200).json(truck.weight)
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
};

const getLoadVolume = async(req, res) =>  {
    try{
        const { id } = req.params;
        if(!id){return console.error(`Truck id ${id} not found`)};
        const truck = await findTruckById(id);
        const loadedPackages = truck.loaded_package_ids.length
        return res.status(200).json(loadedPackages);
    }catch(error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllTrucks,
    getTruckById,
    createNewTruck,
    deleteTruck,
    loadTruck,
    getTrucksWeight,
    unloadTruck,
    getLoadVolume
};