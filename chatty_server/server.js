// server.js

const express = require('express');
const SocketServer = require('ws');
const uuid = require('uuid/v4');
const randomColour = require('random-color');
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer.Server({ server });

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === SocketServer.OPEN) {
            client.send(data);
      }
    });
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  console.log( `${wss.clients.size} users online`)
  const userColor = randomColour().hexString()
  wss.broadcast(JSON.stringify(wss.clients.size))

  ws.on('message', function incoming(data) {
    const result = JSON.parse(data)
    switch (result.type) {
        case 'postMessage':
          const broadcastMessage = {
            id: uuid(),
            type: "incomingMessage",
            username: 'Agent '+result.username,
            content: result.content,
            color: userColor
          };
          console.log(`User ${result.username} said ${result.content}`)
          wss.broadcast(JSON.stringify(broadcastMessage));
          break;
        
        case 'postNotification':
          const broadcastNoti = {
              type: "incomingNotification",
              content: result.content
          };
          console.log(`Noti: someone did sth`)
          wss.broadcast(JSON.stringify(broadcastNoti));
          break;
        default:
      }
    
  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
      console.log('Client disconnected');
      wss.broadcast(JSON.stringify(wss.clients.size));
  });
});
