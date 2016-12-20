'use strict';

const express = require('express');
const PORT = 8080;
const app =  express();
let path = require('path');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let _redis = require('redis');
let redis = _redis.createClient("6379", 'redis');
redis.on('connect', () => { console.log("CONNECTED TO REDIS") })
app.use(cookieParser());
app.use(session({secret: "catParty"}));

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('redis', redis);

// set static file directory
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/index')(app, redis);


app.listen(PORT);
console.log(`App is running on port ${PORT}`);
