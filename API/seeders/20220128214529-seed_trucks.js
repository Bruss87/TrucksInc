'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trucks', [ 
      {
      weight: 7.5,
      loadVolume: 2,
      loaded_package_ids: ['1ad0b0d8-6a12-4c3c-b042-04440e5a3042', 'c08dd4e5-e631-4fee-a789-65429772ea46'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      weight: 5.8,
      loadVolume: 2,
      loaded_package_ids: [	"014de5ac-5145-4e7b-8414-30e8de0169af",	"fdc15244-fb42-4dbd-b555-dbea6eb38111"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      weight: null,
      loadVolume: null,
      loaded_package_ids: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      weight: null,
      loadVolume: null,
      loaded_package_ids: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trucks', null, {});
  }
};
