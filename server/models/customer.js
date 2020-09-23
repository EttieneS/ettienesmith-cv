var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
      firstName: {
          type: String,
          required: true
      },
      lastName: String
  },
  twitter: {
      type: String,
      validate: {
          validator: function(text) {
              return text.indexOf('https://twitter.com/') === 0;
          },
          message: 'Twitter handle must start with https://twitter.com/'
      }
  },
});

var Customer = mongoose.model('Customer', authorSchema);

module.exports = Customer;
