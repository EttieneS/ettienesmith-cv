const Vehicle = require('../models/vehicle-model');

const createVehicle = (req, res) => {
  const body = req.body;

  if (!body){
    return res.status(400).json({
      success: false,
      error: 'You must provide a vehicle',
    });
  }

  const vehicle = new Vehicle(body);

  vehicle.save(function(err) {
    if (err) throw err;
    console.log('Vehicle successfully saved.');
  });
};

module.exports = {
  createVehicle,
}
