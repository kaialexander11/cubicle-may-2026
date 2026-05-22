const Cube = require('../models/Cube');

const uniqid = require('uniqid');
//const db = require('../db.json');

const cubes = [
    {
        id: '5n1o9b6omp01a1wd',
        name: 'Digital Cube',
        description: 'Very rare Cube',
        imageUrl: 'https://images.stockcake.com/public/4/2/7/4275d919-862a-42f2-a648-45b2061152f1/digital-cube-matrix-stockcake.jpg',
        difficultyLevel: 4,
    },
    {
        id: '5n119b6omp0131wd',
        name: 'Futuristic Cube',
        description: 'Extremly dangerous Cube',
        imageUrl: 'https://images.stockcake.com/public/f/0/f/f0f71273-5ce2-45ea-8bf0-1f1bedef0564/neon-cyberpunk-cube-stockcake.jpg',
        difficultyLevel: 3,
    },
];

//exports.getAll = (search, from, to) => cubes.slice(); => VALID!
exports.getAll = async (search, from, to) => {

    //let result = cubes.slice();
    let result = await Cube.find().lean();


    // TODO: use mongoose to filter in the db! 

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;

};

//exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.getOne = (cubeId) => Cube.findById(cubeId).lean();

exports.create = async (cubeData) => {

    const cube = new Cube(cubeData);

    //await cube.save();

    //const newCube = {
        //id: cubes.length + 1,
        //id: (new Date()).getTime(),
        //id: uniqid(),
        //...cubeData,
    //};
    //cubes.push(newCube);
    //cubes.push(newCube);

    return cube.save();
};

exports.attachAccessory = async (cubeId, accessoryId) => {
    //return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } });

    const cube = await Cube.findById(cubeId);
    
    cube.accessories.push(accessoryId);

    return cube.save();
};