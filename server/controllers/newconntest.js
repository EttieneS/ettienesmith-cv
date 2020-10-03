//const router = require('express').Router()
const { Connection } = require('../config/newconn');

// // Better if this goes in your server setup somewhere and waited for.
Connection.connectToMongo();
//
// router.get('/files', (req, res) => {
//    Connection.db.collection('files').find({})
//      .then(files => res.json({ files: files })
//      .catch(err => res.json({ error: err })
// })

Connection.db.collection('vehicles').findOne({}, function (findErr, result) {
  if (findErr) throw findErr;
  console.log(result.type);
  //client.close();
});

//module.exports = router
