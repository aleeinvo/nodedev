const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    const stream = fs.createReadStream(path.join(__dirname, 'data.json'));

    stream.pipe(response);
});

server.listen(3000);