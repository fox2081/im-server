const {Server} = require('ws');
const http = require('http');
const request = require('request');
const url = require('url');
const paht = require('path')


let wss = new Server({port: 14001});
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (msg) => {
        console.log('Message received: ', msg);
    });
    ws.send('Hello!');

});

let app = http.createServer().listen(9999);
app.on('request', function (req, res) {

    console.log(encodeURI(req.url));
    let parseObj = url.parse(req.url, true);
    console.log(parseObj);
    let pathname = parseObj.pathname;
    console.log(pathname);
    req.query = parseObj.query;
    console.log(req.query);

});
