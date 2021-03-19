var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testApi');
var mongoClient = require('./util/database').mongoConnect;
var app = express();
var dotenv = require('dotenv');
dotenv.config();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/testApi', testAPIRouter);app.use('/users', usersRouter);

//sets the connection to the database
mongoClient(() => {});

//Router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testAPIRouter);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 9000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;
