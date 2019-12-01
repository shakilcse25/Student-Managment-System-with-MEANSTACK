var express = require('express');
var path = require('path');


var passport = require('passport');

var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

var api = require('./routes/api');
var resultapi = require('./routes/resultapi');
var courseapi = require('./routes/courseapi');
var app = express();
app.use(cors());

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/bauet_database", { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

mongoose.set('useCreateIndex', true);
app.use(passport.initialize());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist/universitysys')));

app.use('/api', express.static(path.join(__dirname, 'dist/universitysys')));
app.use('/api', api);
app.use('/api', resultapi);
app.use('/api', courseapi);


app.get('*', function (req, res) {
  res.sendfile('dist/universitysys/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
  
// error handler
app.use(function(err, req, res, next){
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
