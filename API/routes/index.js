const express = require('express');
const router = express.Router();

const truckRoute = require('./truck').router;
const packageRoute = require('./package').router;


router.use('./trucks', truckRoute);
router.use('./package', packageRoute);

module.exports = router;