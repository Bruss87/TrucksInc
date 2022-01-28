const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').Server(app);
const port = 3000;
const apiRoutes = require('./routes').router;
const db = require('./config/database');
app.use(cors());
app.use(apiRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(port, function () {
    console.log(`server started on port: ${port}`);
  });