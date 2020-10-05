const express = require('express');

const VehicleCtrl = require('../controllers/vehicle-ctrl');

const router = express.Router();

router.post('/vehicle/create', VehicleCtrl.createVehicle);
router.post('/vehicle', VehicleCtrl.getVehicles);

module.exports = router;
