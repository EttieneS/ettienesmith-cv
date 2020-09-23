const mongoose = require('mongoose');
const conn = 'mongodb+srv://ettienesmithcv:CjH1ro9aDyco1W7r@cluster0.' +
  +'mhunj.gcp.mongodb.net/vehicles?retryWrites=true&w=majority';
try {
  mongoose.connect(conn, { useNewUrlParser: true });
}	catch (error) {
  console.error('Connection error', error.message);
}

const db = mongoose.connection;

module.exports = db;
