const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const apiRoutes = require('./API/routes').router;
const http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(apiRoutes);
const server = http.createServer(app);


if (process.env.NODE_ENV !== 'test') {
  server.listen(port);
  console.log(`server started on port: ${port}`)
}

module.exports = app;