var states = { "": true };

const WO = (function () {
  const allesAan = () => {
    run("ALLES AAN");

    // startscene reference maken en tijd instellen
    // setTimeout(startscene(), 0);
  };
  const run = (timeline) => {
    send('run "' + timeline + '"\n');
    states[timeline] = true;
  };

  function halt(timeline) {
    send('halt "' + timeline + '"\n');
    states[timeline] = false;
  }

  const toggleTimeline = (timeline) => {
    if (states[timeline] == true) {
      halt(timeline);
    } else {
      run(timeline);
    }
  };

  function gotoControlCue(timeline, command) {
    send('gotoControlCue "' + command + '" false ' + timeline + "\n");
  }
  function goOnline() {
    send("online true \n");
  }
  function goOffline() {
    send("online false \n");
  }
  function gotoTime(time){
    send('gotoTime "' + time + '" \n');
  }

  return {
    allesAan: allesAan,
    run: run,
    toggleTimeline: toggleTimeline,
    gotoControlCue: gotoControlCue,
    goOnline: goOnline,
    goOffline: goOffline,
    gotoTime: gotoTime,
    halt: halt,
  };
})();

const send = (message) => {
  try {
    var response = WOsocket.send(message);
    console.log("Sent: " + message);
  } catch (exception) {
    console.log(exception);
  }
};

function kill(timeline) {
  send('kill "' + timeline + '"\n');
  states[timeline] = false;
}

function getStatus(timeline) {
  send("getStatus \n");
  console.log(states);
}

function ping() {
  send("ping \n");
}

function stopAll() {
  Object.keys(states).forEach(function (item) {
    console.log(item);
    kill(item);
  });
}

function reset(timeline) {
  send('reset "' + timeline + '"\n');
}


