var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const Sequelize = require('sequelize');
const  db  = require('./models/index');

(async () => {
  try{
    await db.sequelize.authenticate();
    console.log('Connection to the database successful!');
    await db.sequelize.sync({force: false});
  } catch(err) {
    console.log('error loading db: ' + err.message)
  }
}) ();


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set up server to deliver static files
app.use(express.static('public'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'Sorry partner, we can\'t locate that dagum page'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('------------------------------------------')
  console.log(err.status)
  console.log(err.message)
  console.log(err.stack)
  console.log('------------------------------------------')
  // render the error page
  res.status(err.status || 500);
  if(res.statusCode == '404'){
    res.render('page-not-found', {title: "404 Page Not Found", error: err});
  } else {
    res.render('error', {title: "Server Error", error: err});
  }
});

module.exports = app;
