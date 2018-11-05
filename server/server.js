const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('../routes/api/profile');
const path = require('path');
const db = require('../my-app/config/keys').mongoURI;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const profiles = require('../routes/api/profile');

app.use('/', router);
app.use('/api/profile', profiles);

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) =>res.send('Hello'));

const port = process.env.PORT || 5000; //server checks for port or goes to port number 5000

app.listen(port, () => console.log('Application listening on port ', port));

module.exports = app;