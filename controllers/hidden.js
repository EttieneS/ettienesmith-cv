const MongoClient = require( 'mongodb' ).MongoClient;
const url = require('./config/db.config');

//const url = 'mongodb+srv://ettienesmithcv:CjH1ro9aDyco1W7r@cluster0.mhunj.gcp.mongodb.net/vehicles?retryWrites=true&w=majority';

var conn = new MongoClient.connect(url, function (err, client) {
  if (err) throw err;

  var db = client.db('vehicles');

  db.collection('vehicles').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result.type);
    client.close();
  });
});

export conn;
