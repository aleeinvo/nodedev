const fs = require('fs');
const path = require('path');
const os = require('os');

let file = path.join(__dirname, 'data.json');
let log = path.join(__dirname, 'log.txt');

const files = fs.readdirSync(__dirname).map(file => {
    return path.join(__dirname, file);
}).filter(file => {
    return fs.lstatSync(file).isFile();
});

// console.log(files);

console.log(fs.lstatSync('./log.json'));