const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');

router.route('/').get((req, res) => {
  Vehicle.find()
    .then(vehicles => res.json(vehicles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const type = req.body.type;
  console.log( type );
  const newVehicle = new Vehicle({type});

  newVehicle.save()
    .then(() => res.json('Vehicle added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
