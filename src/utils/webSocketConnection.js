const ws = new WebSocket('ws://13.58.36.34:8080');

ws.onopen = () => {
  console.log('WebSocket connected');
};

ws.onmessage = (event) => {
  console.log('Received message from server:', event.data);
};

export function sendWebSocketMessage(message) {
  ws.send(message);
  console.log('Sent message to server:', message);
}
