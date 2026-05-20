//console.log('Hello world!');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const expressConfigurator = require('./config/expressConfig'); 
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');

const path = require('path'); 
const app = express();

const PORT = 5000;

// Express config => css + images: => path.resolve constructs an Absolute Path! 
// app.use(express.static('src/public')); => this also works correctly!
// app.use(express.static(path.resolve(__dirname, 'public')));

expressConfigurator(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB connected successfully!'))
    .catch(err => {
        console.log('DB error: ', err);
    });

app.use(routes);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}... `));