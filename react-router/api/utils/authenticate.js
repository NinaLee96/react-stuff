const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      console.log('jere');
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// exports.authenticateJWT = authenticateJWT;
module.exports = authenticateJWT;
