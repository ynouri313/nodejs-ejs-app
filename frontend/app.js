const pool = require('./config/database'); 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var studentRouter = require('./routes/students');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());

// Serve static files
app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', studentRouter);

// Test the database connection
app.get('/students/test', async (req, res) => {
  try {
      // Get a connection from the pool
      const [rows, fields] = await pool.execute('SELECT 1'); // Simple query to check the connection

      console.log('Database connected successfully!');
      return res.status(200).json({ message: 'Database connection successful' });
  } catch (err) {
      console.error('Error connecting to the database:', err);
      return res.status(500).json({ message: 'Database connection failed', error: err.message });
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
