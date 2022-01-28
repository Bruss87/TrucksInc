const express = require('express');
const app = express();
const http = require('http').Server(app);
// const schema = require('./models/schema');
// const Logger = require('./services/logger');

const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const apiRoutes = require('./routes');

app.use(cors());
app.use(apiRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log(`server started on port: ${port}`);
  });