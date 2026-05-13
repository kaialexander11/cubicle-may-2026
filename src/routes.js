
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');


const router = require('express').Router();

router.use(homeController);
router.use('/cubes', cubeController);
router.get('*splat', (req, res) => {
    res.redirect('/404');
});

module.exports = router;