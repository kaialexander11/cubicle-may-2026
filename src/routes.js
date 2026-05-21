
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');


const router = require('express').Router();

router.use(homeController);
router.use('/cubes', cubeController);
router.use('/accessories', accessoryController);

router.get('*splat', (req, res) => {
    res.redirect('/404');
});

module.exports = router;