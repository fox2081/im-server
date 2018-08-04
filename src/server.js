let WebSocketServer = require('ws').Server;

let wss = new WebSocketServer({port: 14001});

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (msg) => {
        console.log('Message received: ', msg);
    });
    ws.send('Hello!');

});