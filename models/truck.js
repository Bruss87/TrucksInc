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
        loaded_package_ids: {
          type: DataTypes.ARRAY(DataTypes.UUID),
          defaultValue: []
        }
    },  
    { hooks: {
      beforeCreate: (truck)  => {
        const checkArray =  (field) => {
          if(Array.isArray(field) === false) {
            field =[field]
          }
          return field
        };
        truck.loaded_package_ids = checkArray(truck.loaded_package_ids);
      }}
    });
  
    // Truck.associate = function(models) {
  
    //   Truck.hasMany(models.Package, {
    //     foreignKey: "truck_id",
    //     as: 'packages',
    //   })
    // };
   module.exports = {
     Truck
  }
  