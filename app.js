var express = require('express');
var path = require('path');
var createError = require('http-errors');
var partials = require('express-partials');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var flash = require('express-flash');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Set static folder 
app.use(express.static(path.join(__dirname, 'public')));

//Uso de https en heroku
if(app.get('env') === 'production'){
  app.use((req,res,next) => {
    if(req.headers['x-forwarded-proto'] !== 'https'){
      res.redirect('https://' + req.get('Host') + req.url);
    }else{
      next();
    }
  });
}

//Almacenamiento de session en BBDD
var sequelize = require("./models");
var sessionStore = new SequelizeStore({
  db: sequelize,
  table: "session",
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds. (15 minutes)
  expiration: 4 * 60 * 60 * 1000  // The maximum age (in milliseconds) of a valid session. (4 hours)
});
app.use(session({
  secret: "Quiz 2019",
  store: sessionStore,
  resave: false,
  saveUninitialized: true
}));

// Dynamic Helper:
app.use((req, res, next) => {
  // To use req.session in the views
  res.locals.session = req.session;
  // To use req.url in the views
  res.locals.url = req.url;
  next();
});

//Override with post and get
app.use(methodOverride('_method', {methods: ["POST", "GET"]}));

//Use partials
app.use(partials());
//Use flash
app.use(flash());
app.use('/', indexRouter);

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
