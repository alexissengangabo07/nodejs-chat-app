import http from 'http';
import fs from 'fs';
import url from 'url';

var messages = ["testing"];
var clients = [];

const server = http.createServer((req, res) => {
    var url_parts = url.parse(req.url);
    console.log(url_parts);
    if (url_parts.pathname == '/') {
        // file serving
        fs.readFile('./index.html', function (err, data) {
            res.end(data);
        });
    } else if (url_parts.pathname.substr(0, 5) == '/poll') {
        // polling code here


        var count = url_parts.pathname.replace(/[^0-9]*/, '');
        console.log(count);
        if (messages.length > count) {
            res.end(JSON.stringify({
                count: messages.length,
                append: messages.slice(count).join("")
            }));
        }
        else if (url_parts.pathname.substr(0, 5) == '/msg/') {
            // message receiving
            var msg = unescape(url_parts.pathname.substr(5));
            messages.push(msg);
            while (clients.length > 0) {
                var client = clients.pop();
                client.end(JSON.stringify({
                    count: messages.length,
                    append: msg + ""
                }));
            }
            res.end();
        }
        else {
            clients.push(res);
        }



    }
});

server.on('request', (req, res) => {
    console.log("Server request");

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Max-Age": 2592000
    };

    fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write(data);
        // return res.end();
        res.end(data);
    });
});

server.listen(8000, () => console.log("Connected Hello World!"));