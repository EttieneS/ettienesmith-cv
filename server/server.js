const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const vehiclesRouter = require('../routes/vehicles.js');
const port = process.env.VCAP_APP_PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const mongoose = require('mongoose');

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

app.use('/vehicles', vehiclesRouter);

app.all('', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/src', 'index.js'));
});

app.listen(port, () => {
  console.log('Server listening 5000');
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

module.exports = app;
