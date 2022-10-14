import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => { 
    console.log(`Server Requested`);
    res.write(`Hello world!`);
    return res.end();
});

server.listen(8080, () => { console.log(`Server started successfuly`) });