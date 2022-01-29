'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Trucks', 'loaded_package_ids', {
      defaultValue: [],
      type: Sequelize.ARRAY(Sequelize.UUID),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Trucks', 'loaded_package_ids');
  },
};