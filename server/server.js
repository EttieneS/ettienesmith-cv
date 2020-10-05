const express = require('express');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-parser');
const MongoClient = require( 'mongodb' ).MongoClient;
const router = express.Router();
const cors = require('cors');

const VehicleCtrl = require('./controllers/vehicle-ctrl');

const app = express();
const port = process.env.VCAP_APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.all('', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/src', 'index.js'));
});

app.get('/vehicles', VehicleCtrl.getVehicles);

// start node server
app.listen(port, () => {
  console.log('Server listening 8000');
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

module.exports = app;
