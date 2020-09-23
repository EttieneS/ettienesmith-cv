var mongoose = require('mongoose');

var vehicleSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	manufacturer: String,
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
