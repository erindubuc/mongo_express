const express = require('express');
// initialize express app
const app = express();
// middleware = bodyParser
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// if data is coming in urlencoded - parse it with json
app.use(bodyParser.urlencoded({ extended: false }));
// send back as json so we can make it a Javascript object
app.use(bodyParser.json());
// can use . notation to require only the mongoURI
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello'))


const port = process.env.PORT || 5000

app.listen(port, () => console.log('Listening on port ', port))

