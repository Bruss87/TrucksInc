const Sequelize = require('sequelize');
const db = require('../config/database');
const DataTypes = Sequelize;


const Package = db.define("Package", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    truck_id: {
        type: DataTypes.UUID
    },
    last_truck_id: {
        type: DataTypes.UUID
    }
});

Package.associate = function (models) {
    Package.belongsTo(models.Truck, {
        onDelete: "cascade",
        foreignKey: "truck_id",
        targetKey: "id"
    })
};

module.exports = {
    Package
};
