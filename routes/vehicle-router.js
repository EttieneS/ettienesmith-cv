const express = require('express');

const VehicleCtrl = require('../controllers/vehicle-ctrl');

const router = express.Router();

router.post('/vehicles/create', VehicleCtrl.createVehicle);
router.get('/vehicles/', VehicleCtrl.getAllVehicles);

module.exports = router;
