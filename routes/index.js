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
  let myBook = new Book();
  myBook = postHelper(myBook, req);
  myBook.save()
  res.redirect(`/books`);
});

/* GET display book detail form */
router.get('/books/:id', async function(req, res, next) {
  let id = req.params.id;
 if(id){
   const book = await Book.findByPk(id);
   if(book){
    res.render('update-book', {book});
   }
 }
 res.redirect('/no-book-found');
});

/* POST update book detail form */
router.post('/books/:id', async function(req, res, next) {
  const id = req.params.id;
  let book = await Book.findByPk(id);
  postHelper(book, req)
  book.save();
  res.redirect(`/books`);
});

/* DELETE  book   */
router.post('/books/:id/delete', async function(req, res, next) {
  const id = req.params.id;
  let book = await Book.findByPk(id);
  await book.destroy();
  res.redirect('/books');
});

function postHelper(obj, req){
  for( let key in obj.rawAttributes ){
    if(req.body[key]){
      obj[key] = req.body[key];
    }
  }
  return  obj;
}


module.exports = router;
