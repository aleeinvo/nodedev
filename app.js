const fs = require('fs');
const path = require('path');
const os = require('os');

let file = path.join(__dirname, 'data.json');
let log = path.join(__dirname, 'log.txt');

console.log(path.resolve('.'));