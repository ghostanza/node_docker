'use strict';

//require('dotenv').config();

const express = require('express');
const PORT = 8080;
const app =  express();
let path = require('path');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let _redis = require('redis');

let bluebird = require('bluebird');
bluebird.promisifyAll(require('redis'));

let db = _redis.createClient("6379", 'redisnode');
db.on('connect', () => { console.log("\nCONNECTED TO REDIS DB\n") })

app.use(cookieParser());
app.use(session({secret: "catParty"}));

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// set static file directory
app.use('/public',express.static(path.join(__dirname, 'public')));

require('./routes/index')(app, db);
app.get('/favicon.ico', (req, res) => { res.send(200); } );

app.listen(PORT);
console.log(`App is running on port ${PORT}`);
