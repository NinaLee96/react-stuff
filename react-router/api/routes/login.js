const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// dummy user db
const users = [
  {
    username: 'johndoe',
    password: '12345',
    role: 'admin',
  },
  {
    username: 'anna',
    password: 'beepboop',
    role: 'member',
  },
];

/* login api */

router.get('/', function (req, res, next) {
  res.send(users);
});

router.post('/', (req, res) => {
  // Read username and password from request body
  console.log(req.body);
  const { username, password } = req.body;

  // Filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    // Generate an access token
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      accessToken,
    });
  } else {
    res.send('Username or password incorrect');
  }
});

module.exports = router;
