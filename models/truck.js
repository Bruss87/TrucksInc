;
module.exports = (sequelize, DataTypes) => {
  const Truck = sequelize.define("Truck", {

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
  });

  Truck.afterUpdate(function (truck) {
    

  });

  return Truck
}

