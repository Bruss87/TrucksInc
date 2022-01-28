const Package = require('../models/package').Package;


const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.findAll({})
        res.status(200).send(packages)
    } catch (err) { console.log(err) }
    res.status(500).send(err)
};
const getPackageById = async (req, res) => {
    try {
        const package = await Package.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(package)
    } catch (err) { console.log(err) }
    res.status(500).send(err)
};

const createNewPackage = async (req, res) => {
    const { weight, track_id, last_truck_id} = req.body;
    try {
        await Package.create({weight, track_id, last_truck_id});
        res.status(200).json({
            "message": "package created"
        });
    } catch (err) { console.log(err) }
    res.status(500).send(err)
};

const deletePackage = async (req, res) => {
    try{
        await Package.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({
            "message": "Package deleted"
        })
    } catch (err) { console.log(err) }
    res.status(500).send(err)
}

module.exports = {
    getAllPackages,
    getPackageById,
    createNewPackage,
    deletePackage
}