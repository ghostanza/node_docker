'use strict';

const express = require('express');
const PORT = 8080;
const app =  express();
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({secret: "catParty"}));

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// set static file directory
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/index')(app);


app.listen(PORT);
console.log(`App is running on port ${PORT}`);
