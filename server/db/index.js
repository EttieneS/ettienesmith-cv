const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://cluster0.mhunj.gcp.mongodb.net/vehicles?retryWrites=true&w=majority', {
    auth: {
      "user": "ettienesmithcv",
      "password": "CjH1ro9aDyco1W7r"
    },
    options: {
      "useNewUrlParser": true
    }
  })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;

module.exports = db;
