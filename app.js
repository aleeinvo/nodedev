const fs = require('fs');
const path = require('path');

let file = path.join(__dirname, 'data.json');

fs.stat(file, (error, stats) => {
    if(error) {
        console.error(error);
    }

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.size);
})