// set the IP address of the machine you wish to connect to
// watchout listens on the port 3040
//var host = "ws://10.172.15.244:3040";
// var host = "ws://192.168.1.95:3040";
// var host = "ws://213.46.228.196:3040";
// var host = "ws://10.0.0.100:3040";
// var host = "ws://192.168.0.100:3040";
var host = "ws://127.0.0.1:3040";
var socket = new WebSocket(host);
var states = {'': true, 'Test': true, 'BAnnaan': true, 'Timeline 5': true};

socket.onopen = function () {
  console.log("Socket Status: " + socket.readyState + " (open)");
  ping();
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