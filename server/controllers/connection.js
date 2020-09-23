const mongoose = require('mongoose');
const conn = 'mongodb+srv://ettienesmithcv:CjH1ro9aDyco1W7r@cluster0.' +
  +'mhunj.gcp.mongodb.net/vehicles?retryWrites=true&w=majority';

mongoose.connect(conn, function(err) {
  if (err) throw err;
});
console.log('Successfully connected');
