var express = require('express');
var router = express.Router();
const getDb = require('../util/database').getDb;

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try{
    const db = getDb();
    const users = await db.collection("users").find({}).toArray(); //use toArray to parse the mongo cursor
    console.log(users);
    res.json(users);
    // return users
  }catch(err){
    console.log(err);
    res.json({message: err})
  }
});

//to POST, request.body then push to DB
router.post('/', (req, res, next)=> {
  const newUser = req.body;
  console.log(newUser)
  const db = getDb();
  //it's collection. not collections.
  db.collection("users")
    .insertOne(newUser, (err, res) => {
      if (err) throw err;
      console.log(res.body);
    })
  // client.close();
  console.log("user added")
  // users.push(newUser);
  // console.log(newUser);
  
})

module.exports = router;
