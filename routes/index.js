var express = require('express');
var router = express.Router();
var Books = require('../models/book')
const  db  = require('../models/index');
const { Book } = db;

/* GET home route */
router.get('/', async function(req, res, next) {
  res.redirect('/books');
});

/* GET shows full list of books */
router.get('/books', async function(req, res, next) {
  let books = await Book.findAll();
  res.render('allBooks', {books: books});
});

/* GET new book form display route */
router.get('/books/new', async function(req, res, next) {
  res.render('new-book');
});

/* POST new book added to db */
router.post('/books/new', async function(req, res, next) {
  const id = 0;
  res.redirect(`/books/${id}`);
});

/* GET display book detail form */
router.get('/books/:id', async function(req, res, next) {
  res.render('update-book');
});

/* POST update book detail form */
router.post('/books/:id', async function(req, res, next) {
  const id = req.params.id;
  res.redirect(`/books/${id}`);
});

/* DELETE  book   */
router.post('/books/:id/delete', async function(req, res, next) {
  const id = req.params.id;
  res.redirect(`/books/${id}`);
});



module.exports = router;
