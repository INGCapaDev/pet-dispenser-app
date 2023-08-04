const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('WebSocket connected');
};

ws.onmessage = (event) => {
    console.log('Received message from server:', event.data);
};

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    ws.send(message);
    console.log('Sent message to server:', message);
    messageInput.value = '';
}