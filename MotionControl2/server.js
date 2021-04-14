const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server:server });
// import { toggle } from "watchoutFuntcions.js";

wss.on('connection', function connection(ws) {
  console.log('a new client connected');
  ws.send('connected to server');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('got your message, its:' + message);

    if (message == "toggle" ){
      toggle('');
    }
  });

});


app.get('/', (req, res) => res.send('heloworld'));

server.listen(3000, () => console.log('listening on port :3000'));

