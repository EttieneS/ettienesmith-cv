const express = require('express');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-parser');
const MongoClient = require( 'mongodb' ).MongoClient;

const app = express();
const port = process.env.VCAP_APP_PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.all('', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/public', 'index.html'));
});

// start node server
app.listen(port, () => {
  console.log('Server listening 8000');
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

module.exports = app;
