var express = require('express');
var router = express.Router();
var Books = require('../models/book')
const  db  = require('../models/index');
const { Book } = db;

/* GET home page. */
router.get('/', async function(req, res, next) {
  let books = await Book.findAll();
  res.render('allBooks', books);
});

module.exports = router;
