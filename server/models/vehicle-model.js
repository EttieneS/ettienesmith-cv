var mongoose = require('mongoose');
const Schema = mongoose.vehicleSchema

const Vehicle = new Schema(
  {
    type: { type: String }
  },
)

module.exports = mongoose.model('users', Vehicle)
