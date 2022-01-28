// import sequelize
const { Sequelize } = require("sequelize");
 
// create connection
const db = new Sequelize('postgres', 'postgres', 'hotsauce', {
    host: 'localhost',
    dialect: 'postgres'
});
 
// export connection
module.exports = db;