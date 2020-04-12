const fs = require('fs');
const unique = require('../util/unique');

exports.getLoctions = () => {
    let fileContent = fs.readFileSync('res/kills.csv');
    fileContent = fileContent.toString().split('\n');
    let arrayOfLocations = [];
    fileContent.shift();
    fileContent.forEach(el => arrayOfLocations.push(el.split(',')[0]));
    arrayOfLocations = unique(arrayOfLocations);
    // console.log(arrayOfLocations);
    return arrayOfLocations;
}

exports.getPersona = () => {
    let fileContent = fs.readFileSync('res/kills.csv');
    fileContent = fileContent.toString().split('\n');
    let arrayOfLocations = [];
    fileContent.shift();
    fileContent.forEach(el => arrayOfLocations.push(el.split(',')[1]));
    arrayOfLocations = unique(arrayOfLocations);
    return arrayOfLocations;
}

exports.getWeapon = () => {
    let fileContent = fs.readFileSync('res/kills.csv');
    fileContent = fileContent.toString().split('\n');
    let arrayOfLocations = [];
    fileContent.shift();
    fileContent.forEach(el => arrayOfLocations.push(el.split(',')[2]));
    arrayOfLocations = unique(arrayOfLocations);
    return arrayOfLocations;
}