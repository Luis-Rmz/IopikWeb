var path = require('path');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


// connecting to db
mongoose.connect('mongodb://localhost:27017/iopik', { useNewUrlParser: true })
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));

//importing routes
var indexRoutes = require('./routes/index');

//setings
app.set('port', process.env.PORT || 3200);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//minddlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes 
app.use('/', indexRoutes);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});