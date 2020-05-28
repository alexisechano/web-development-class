#!/usr/bin/nodejs

//Main node.js server
//Alexis Echano, 2020

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express')
var app = express();

var path = require('path')
var hbs = require('hbs')

var https = require('https');

var controllers = require('./controllers')

// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

app.set('port', process.env.PORT || 12515 );
app.use(express.static(path.join(__dirname, 'static')))

// --------------  views initialization -------------- //
app.set('view engine', 'hbs');
hbs.registerPartials( path.join(__dirname,'views','partials') )

// -------------- assign specific endpoints -------------- //
controllers.do_setup(app);

// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});