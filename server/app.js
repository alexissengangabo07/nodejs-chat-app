import http from 'http';
import fs from 'fs';
import url from 'url';

const PORT = process.env.PORT || 5000;

const server = http.createServer();

server.on("request", (req, res) => {
    const urlparse = url.parse(req.url, true);
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
        "Access-Control-Max-Age": 2592000
    };

    if (req.method === "GET" && urlparse.pathname === "/home") {
        res.writeHead(200, headers);
        res.write("Salut, Vous etes sur la route ACCEUIL");
        res.end();
    }
    else if (req.method === "POST" && urlparse.pathname === "/message") {

        fs.readFile('./messages.json', (err, data) => {
            if (err) throw err;
            res.writeHead(200, headers);
            res.write(data);
            let oldMessages = JSON.parse(data);

            let newMessage = {
                username: "new",
                message: "new message",
                dateTime: "2022-11-10T09:30:00"
            };
            // console.log(oldMessages);
            let messages = oldMessages.concat(newMessage);
            fs.writeFile('./messages.json', JSON.stringify(messages), (err) => {
                if (err) throw err;
                console.log('Data written to file avec success');
                res.write('OKAY DONNEE INSEREE AVEC SUCCESS');
                res.end();
            });
        });
    }
    else if (req.method === "GET" && urlparse.pathname === "/message") {
        fs.readFile('./messages.json', (err, data) => {
            if (err) throw err;
            res.writeHead(200, headers);
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHead(404, headers);
        res.end(JSON.stringify({ message: "Route non defini" }));
    }
});

server.on('data', data => {
    console.log('first')
});

server.listen(PORT, () => console.log("Connected Hello World!"));