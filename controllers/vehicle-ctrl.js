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

getVehicles = async (req, res) => {
  await Vehicle.find({}, (err, vehicles) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!vehicles.length) {
          return res
              .status(404)
              .json({ success: false, error: 'Vehicle not found' })
      }
      return res.status(200).json({ success: true, data: vehicles })
  }).catch(err => console.log(err))
}

module.exports = {
  createVehicle,
  getVehicles,
}
