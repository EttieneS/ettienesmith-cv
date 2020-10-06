var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    type: { type: String },
})

const Vehicle = mongoose.model('Vehicle')

module.exports = mongoose.model('users', Vehicle);
