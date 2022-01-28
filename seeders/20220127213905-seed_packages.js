'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Packages', [{
      weight: 2.5,
      truck_id: 1,
      last_truck_id: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      weight: 5,
      truck_id: 1,
      last_truck_id: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      weight: 2,
      truck_id: 1,
      last_truck_id: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      weight: 3.8,
      truck_id: 2,
      last_truck_id: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      weight: 8,
      truck_id: 2,
      last_truck_id: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Packages', null, {});
  }
};
