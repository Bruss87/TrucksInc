const Sequelize = require('sequelize');
const db = require('../config/database');
const DataTypes = Sequelize;

const Truck = db.define("Truck", {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        loadVolume: {
            type: DataTypes.INTEGER
        }
    });
  
    Truck.associate = function(models) {
  
      Truck.hasMany(models.Package, {
        foreignKey: "truck_id",
        as: 'packages',
      })
  
    }
  module.exports = {
      Truck
  };