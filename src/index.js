//console.log('Hello world!');

const express = require('express');
const handlebars = require('express-handlebars');
const expressConfigurator = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const path = require('path');
const app = express();

const PORT = 5000;

// Express config => css + images: => path.resolve constructs an Absolute Path! 
// app.use(express.static('src/public')); => this also works correctly!
// app.use(express.static(path.resolve(__dirname, 'public')));

expressConfigurator(app);
handlebarsConfig(app);

app.get('/', (req, res) => {
    //res.send('Hello from Express!');
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}... `));