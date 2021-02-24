
  
// set the IP address of the machine you wish to connect to
// watchout listens on the port 3040
//var host = "ws://10.172.15.244:3040";
// var host = "ws://192.168.1.95:3040";
// var host = "ws://213.46.228.196:3040";
// var host = "ws://10.0.0.100:3040";
var host = "ws://192.168.253.80:3040";
var socket = new WebSocket(host);
var states = { HSD: false, D48V: false };

socket.onopen = function () {
  console.log("Socket Status: " + socket.readyState + " (open)");
};

socket.onmessage = function (msg) {
  console.log("Received: " + msg.data);
};

socket.onclose = function () {
  console.log("Socket Status: " + socket.readyState + " (Closed)");
};

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

