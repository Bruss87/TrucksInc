module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Trucks", {
  
        id: {
            type: Sequelize.UUID, 
            defaultValue: Sequelize.literal('uuid_generate_v4 ()'),          
            primaryKey: true,
            allowNull: false
        },
        weight: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        loaded_package_ids: {
            type: Sequelize.ARRAY(Sequelize.UUID),
            defaultValue: []
        },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
          },
      })
    },
    down: (queryInterface, Sequelize ) => queryInterface.dropTable("Trucks"),
  
  }