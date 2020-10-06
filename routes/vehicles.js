const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');

router.route('/').get((req, res) => {
  Vehicle.find()
    .then(vehicles => res.json(vehicles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/vehicle/add').post((req, res) => {
  const type = req.body.type;
  console.log( type );
  const newVehicle = new Vehicle({type});

  newVehicle.save()
    .then(() => res.json('Vehicle added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Vehicle.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Vehicle.findByIdAndDelete(req.params.id)
    .then(() => res.json('Vehicle deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Vehicle.findById(req.params.id)
    .then(exercise => {
      vehicle.type = req.body.type;

      exercise.save()
        .then(() => res.json('Vehicle updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
