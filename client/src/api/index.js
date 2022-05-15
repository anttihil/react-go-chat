const socket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb) => {
  console.log("Attempting to connect.");

  socket.onopen = () => {
    console.log("Successfully connected.");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket connection close");
  };
};

let sendMsg = (msg) => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
