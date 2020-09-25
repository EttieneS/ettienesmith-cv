var mongoose = require('mongoose');

var vehicleSchema = mongoose.Schema({
  type: String,
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
