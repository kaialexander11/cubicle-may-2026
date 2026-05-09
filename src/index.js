//console.log('Hello world!');

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

const PORT = 5000;

// Express config => css + images:
app.use(express.static(path.resolve(__dirname, 'public')));

// Handlebars config!
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');


app.get('/', (req, res) => {
    //res.send('Hello from Express!');
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}... `));