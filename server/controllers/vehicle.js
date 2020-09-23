const Vehicle = require('../models/vehicle');

const createVehicle = (req, res) => {
  const body = req.body;

  if (!body){
    return res.status(400).json({
      success: false,
      error: 'You must provide a vehicle',
    });
  }

  const vehicle = new Vehicle(body);

  if (!vehicle) {
    return res.status(400).json({ success: false,
      error: 'no data to be saved' });
  }

  vehicle.save(function(err) {
    if (err) throw err + ' could not save';
  });
};

module.exports = {
  createVehicle,
};
