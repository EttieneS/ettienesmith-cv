const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customer_name : String
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

// var customerSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   customer_name : String,
//   name: {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: String,
//   },
//   twitter: {
//     type: String,
//     validate: {
//       validator: function(text) {
//         return text.indexOf('https://twitter.com/') === 0;
//       },
//       message: 'Twitter handle must start with https://twitter.com/',
//     },
//   },
// });
