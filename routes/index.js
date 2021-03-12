var express = require('express');
var router = express.Router();
var Books = require('../models/book')
const  db  = require('../models/index');
const { Book } = db;

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.redirect('/books');
});


router.get('/books', async function(req, res, next) {
  let books = await Book.findAll();
  res.render('allBooks', {books: books});
});

module.exports = router;
