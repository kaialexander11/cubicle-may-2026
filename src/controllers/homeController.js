const router = require('express').Router();
//const router = express.Router;

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;

// exports.getHome = (req, res) => {
//     res.render('index');
// };