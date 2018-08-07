const {Server} = require('ws');
const http = require('http');
const request = require('request');
const url = require('url');
const path = require('path');

const UserInfo = require('./handler/user-info.js');

let userInfo = new UserInfo();

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

    let parseObj = url.parse(req.url, true);
    let pathname = parseObj.pathname;
    let [auth, type, route] = pathname.split('/');

    if ('usr' === auth && UserInfo.judgeToken(parseObj.token)) {

    }

    req.query = parseObj.query;

    console.log(encodeURI(req.url));
    console.log(parseObj);
    console.log(pathname);
    console.log(req.query);

});
