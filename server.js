const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

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
    
// API routes
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');

app.use('/api/users', users);
app.use('/api/profiles', profiles);

app.get('/', (req, res) => res.send('Hello'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Listening on port ', port))
