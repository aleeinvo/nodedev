
const axios = require('axios');
const https = require('https');

async function fetchData() {
    let response = await axios
        .get('https://jsonplaceholder.typicode.com/users/1');

    console.log(response.status, response.data);
}

function fetchDataNatively() {
    const request = https.request({
        hostname: 'jsonplaceholder.typicode.com',
        port: 443,
        path: '/users/1',
        method: 'GET'
    }, response => {
        response.on('data', data => {
            process.stdout.write(data);
        })
    });

    request.on('error', console.error);

    request.end();
}

fetchDataNatively();