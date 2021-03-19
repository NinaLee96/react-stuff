const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../utils/authenticate');

// dummy db of books
const books = [
  {
    author: 'Chinua Achebe',
    country: 'Nigeria',
    language: 'English',
    pages: 209,
    title: 'Things Fall Apart',
    year: 1958,
  },
  {
    author: 'Hans Christian Andersen',
    country: 'Denmark',
    language: 'Danish',
    pages: 784,
    title: 'Fairy tales',
    year: 1836,
  },
  {
    author: 'Dante Alighieri',
    country: 'Italy',
    language: 'Italian',
    pages: 928,
    title: 'The Divine Comedy',
    year: 1315,
  },
];

const router = express.Router();

// request then response or it won't work
router.get('/', auth, (req, res) => {
  res.json({ books });
  // res.send('hello');
});

module.exports = router;
