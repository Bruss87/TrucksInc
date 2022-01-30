const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const apiRoutes = require('./routes').router;
// const db = require('./config/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
// require('./routes')(app);
app.use(apiRoutes)
app.listen(port, function () {
    console.log(`server started on port: ${port}`);
  });