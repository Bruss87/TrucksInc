module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Packages", {
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
        truck_id: {
            type: Sequelize.INTEGER,
        },
        last_truck_id: {
            type: Sequelize.INTEGER,
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
  
    down: (queryInterface, Sequelize ) => queryInterface.dropTable("Packages"),
  
  }