const Package = require('../models').Package;

const getAllPackages = async (req, res) => {
    try {
        const parcels = await Package.findAll({})
        return res.status(200).send(parcels)
    } catch (error) { 
        return res.status(500).json({ error: error.message });
    }
};
const getPackageById = async (req, res) => {
    try {
        const parcel = await Package.findOne({
            where: {
                id: req.params.id
            }
        })
       return res.status(200).send(parcel)
    } catch (error) { 
        return res.status(500).json({ error: error.message });
    }
};

const createNewPackage = async (req, res) => {
    const { weight, truck_id, last_truck_id} = req.body;
    try {
        await Package.create({weight, truck_id, last_truck_id});
        return res.status(200).json({
            "message": "package created"
        });
    } catch (error) { 
        return res.status(500).json({ error: error.message });
    }
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
    } catch (error) { 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPackages,
    getPackageById,
    createNewPackage,
    deletePackage,
};