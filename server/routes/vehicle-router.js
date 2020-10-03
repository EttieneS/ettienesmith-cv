const express = require('express');

const VehicleCtrl = require('../controllers/vehicle-ctrl');

const router = express.Router();

router.post('/vehicle', VehicleCtrl.createVehicle);

module.exports = router;
