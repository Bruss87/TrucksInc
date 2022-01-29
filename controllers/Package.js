const Package = require('../models/package').Package;
const Truck = require('../models/truck').Truck;

const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.findAll({})
        return res.status(200).send(packages)
    } catch (err) { console.log(err) }
       return res.status(500).send(err)
};
const getPackageById = async (req, res) => {
    try {
        const package = await Package.findOne({
            where: {
                id: req.params.id
            }
        })
       return res.status(200).send(package)
    } catch (err) { console.log(err) }
    return res.status(500).send(err)
};

const createNewPackage = async (req, res) => {
    const { weight, truck_id, last_truck_id} = req.body;
    try {
        await Package.create({weight, truck_id, last_truck_id});
        return res.status(200).json({
            "message": "package created"
        });
    } catch (err) { console.log(err) }
    return res.status(500).send(err)
};

const deletePackage = async (req, res) => {
    try{
        await Package.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(200).json({
            "message": "Package deleted"
        })
    } catch (err) { console.log(err) }
   return res.status(500).send(err)
};

// const loadToTruck = async (req, res) => {
//     try{
//         const {truckId} = req.params;
//         const { packageId } = req.body;
//         const package = await Package.findOne({where: {id: packageId}});
//         await package.update({truck_id: null, last_truck_id: truckId });

//     } catch (err) { console.log(err) }
//    return res.status(500).send(err)
// }

module.exports = {
    getAllPackages,
    getPackageById,
    createNewPackage,
    deletePackage,
    // loadToTruck
};