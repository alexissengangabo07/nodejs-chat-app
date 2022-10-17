import http from 'http';
import fs from 'fs';
import url from 'url';

let messages = ["Message de test depuis le serveur"];
let clients = [];
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Max-Age": 2592000
    };

    if (req.url === "/home" && req.method === "GET") {
        res.writeHead(200, headers);
        res.write("Salut, Vous etes sur la route ACCEUIL");
        res.end();
    }
    else if (req.url === "/message" && req.method === "GET") {
        res.writeHead(200, headers);
        res.write("Salut, Vous etes sur la route MESSAGE");
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => console.log("Connected Hello World!"));