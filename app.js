const fs = require('fs');
const path = require('path');

let file = path.join(__dirname, 'data.json');

console.log(path.basename(file, path.extname(file)));

console.log(path.resolve('some', '.'));

console.log(path.normalize('./../../express-app/app.js'));