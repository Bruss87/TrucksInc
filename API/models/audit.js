
module.exports = (sequelize, DataTypes) => {

    const Audit = sequelize.define("Audit", {
       id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4
       },
       parcel_id: {
           type: DataTypes.UUID,
           allowNull: false
       },
       truck_id: {
           type: DataTypes.UUID
       },
       event: {
           type: DataTypes.STRING
       }
   });
   Audit.associate = function (models) {
    Audit.belongsTo(models.Truck, {
        onDelete: "CASCADE",
        foreignKey: "truck_id"
    });
    Audit.belongsTo(models.Package, {
            onDelete: "CASCADE",
            foreignKey: "parcel_id"
        });
};

       return Audit
   }
   