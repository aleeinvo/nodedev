const fs = require('fs');
const path = require('path');
const os = require('os');

let file = path.join(__dirname, 'data.json');
let log = path.join(__dirname, 'log.txt');

fs.writeFile(log, '[' + (new Date()).toISOString() + '] ' + JSON.stringify({
    name: 'Ali Dhillon',
    username: 'aleedhillon',
    city: 'Lahore'
}) + os.EOL, {
    flag: 'a+'
}, error => {
    if(error) {
        console.log(error.message);
        return;
    }

    console.log('file has been written successfully');
});