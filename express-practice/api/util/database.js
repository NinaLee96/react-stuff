
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const url = process.env.DB_KEY;

let _db;

console.log(url)
const mongoConnect = (callback) => {
  MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
      console.log("connected");
      //sets _db to the default db 
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log('error', err)
      throw err;
    });
}

const getDb = () => {
  if(_db){
    return _db
  }
}

module.exports = { mongoConnect, getDb };

