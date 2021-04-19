const requirejs = require("requirejs"); 

requirejs.config({
  //Pass the top-level main.js/index.js require
  //function to requirejs so that node modules
  //are loaded relative to the top-level JS file.
  nodeRequire: require,
});

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  console.log("A new client Connected!");
  ws.send("Welcome New Client!");

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
        if (message == "toggle") {
          //send 
          console.log("received message toggle");
          ws.send('received toggle message');
        }
      }
    });
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

server.listen(7685, () => console.log(`Lisening on port :7685`));