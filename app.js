const fs = require('fs');
const path = require('path');

let file = path.join(__dirname, 'data.jsons');

if(fs.existsSync(file)) {
    fs.readFile(file, 'utf-8', (err, content) => {

        if(err) {
            console.error(err.message);
            return;
        }
    
        console.log(content);
    })
}