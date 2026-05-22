const Accessory = require('../models/Accessory');

//exports.create = (accessoryData) => console.log(accessoryData);

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getOthers = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds }});