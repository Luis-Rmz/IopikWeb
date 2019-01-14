var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var admin = require('firebase');

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyA0AnH4GzHsk8qHCbWdN9LRQYYks8lrH4c",
    authDomain: "buildings-f63c6.firebaseapp.com",
    databaseURL: "https://buildings-f63c6.firebaseio.com",
    projectId: "buildings-f63c6",
    storageBucket: "buildings-f63c6.appspot.com",
    messagingSenderId: "10696684438"
};
firebase.initializeApp(config);

//Create instance of express app
var app = express()


// We want to serve js and html in ejs
//ejs stands for emvedded javascript
app.set('view engine', 'ejs')

//We also want to send css, images and other static files
app.use(express.static('views'))
app.set('views', __dirname + '/views')

//Give the server access to the user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/', function(request, response) {
    response.render('home.ejs')
})

app.post('/', function(request, request) {
    console.log(request.body.title)
})

var port = 3200

app.listen(port, function() {
    console.log('App running on port: ' + port)
})