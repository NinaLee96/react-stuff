const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const bookRouter = require('./routes/books');

const port = process.env.PORT || 9000;

// api routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/books', bookRouter);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
