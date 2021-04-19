// set the IP address of the machine you wish to connect to
// watchout listens on the port 3040
//var host = "ws://10.172.15.244:3040";
// var host = "ws://192.168.1.95:3040";
// var host = "ws://213.46.228.196:3040";
// var host = "ws://10.0.0.100:3040";
// var host = "ws://192.168.0.100:3040";
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ 'wss://jordipeeters.online':server });
// var connection = new WebSocket('ws://html5rocks.websocket.org/echo', ['soap', 'xmpp']);

wss.on('connection', function connection(ws) {
  console.log('a new client connected');
  ws.send('connected to server');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('got your message, its:' + message);
  });

});


app.get('/', (req, res) => res.send('heloworld'));

server.listen(7685, () => console.log('listening on port :7685'));
// var host = "ws://127.0.0.1:3040";
// var socket = new WebSocket(host);



// socket.onopen = function () {
//   console.log("Socket Status: " + socket.readyState + " (open)");
//   ping();
// };

// socket.onmessage = function (msg) {
//   console.log("Received: " + msg.data);
// };

// socket.onclose = function () {
//   console.log("Socket Status: " + socket.readyState + " (Closed)");
// };


//watchout functions

var states = {'': true, 'Test': true, 'BAnnaan': true, 'Timeline 5': true};

function send(message) {
  try {
    var response = socket.send(message);
    console.log("Sent : " + message);
  } catch (exception) {
    console.log(exception);
  }
}

function toggle(timeline) {
  if (states[timeline] == true) {
    halt(timeline);
  } else {
    run(timeline);
  }
}

function kill(timeline) {
  send('kill "' + timeline + '"\n');
  states[timeline] = false;
}

function run(timeline) {
  send('run "' + timeline + '"\n');
  states[timeline] = true;
}

function halt(timeline) {
  send('halt "' + timeline + '"\n');
  states[timeline] = false;
}

function gotoControlCue(timeline, command) {
  send('gotoControlCue "' + command + '" false ' + timeline + "\n");
}

function getStatus(timeline) {
  send('getStatus \n');
  console.log(states);
}

function ping(){
  send('ping \n');
}

function stopAll() {
  Object.keys(states).forEach(function (item) {
    console.log(item);
    kill(item);
  });
}

function reset(timeline){
  send('reset "' + timeline + '"\n');

}

function goOnline(){
  send('online true \n');
}
function goOffline(){
  send('online false \n');
}