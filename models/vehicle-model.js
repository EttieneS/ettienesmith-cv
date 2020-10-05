var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vehicle = new Schema(
  {
    type: { type: String }
  },
)

module.exports = mongoose.model('users', Vehicle);
