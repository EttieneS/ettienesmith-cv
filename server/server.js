const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');


let Vehicle = require('../models/vehicle.model');

const vehiclesRouter = require('../routes/vehicles.js');

const port = process.env.VCAP_APP_PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.ATLAS_URI;

try {
  mongoose.connect("mongodb+srv://ettienesmithcv:CjH1ro9aDyco1W7r@cluster0.mhunj.gcp.mongodb.net/vehicles?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true });
} catch (error) {
  handleError(error);
}

const connection = mongoose.connection;
try {
  connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
  });
} catch (error) {
  handleError(error);
}

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ettienesmithcv:<password>@cluster0.mhunj.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
app.post('/vehicles/add/', function (req, res) {
  var type = req.body;

  console.log( type );
  res.send({ status: "bonobo success"});
  //const newVehicle = new Vehicle(type);

  // newVehicle.save()
  //   .then(() => res.json('Vehicle added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));
});

app.use('/vehicles', vehiclesRouter);

// app.all('', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../client/src', 'index.js'));
// });

// start node server
app.listen(port, () => {
  console.log('Server listening 5000');
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, '../public', '404.html'));
// });

module.exports = app;
