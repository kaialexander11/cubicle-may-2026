//console.log('Hello world!');
const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const path = require('path');
const app = express();

const PORT = 5000;

// Express config => css + images: => path.resolve constructs an Absolute Path! 
// app.use(express.static('src/public')); => this also works correctly!
// app.use(express.static(path.resolve(__dirname, 'public')));

expressConfigurator(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cubes', cubeController);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}... `));