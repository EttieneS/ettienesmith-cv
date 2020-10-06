const express = require('express');

const VehicleCtrl = require('../controllers/vehicle-ctrl');

const router = express.Router();

router.post('/create', VehicleCtrl.createVehicle);
router.get('/', VehicleCtrl.getAllVehicles);

module.exports = router;
