const socket = io();

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", () => {
  const message = messageInput.value;
  messageInput.value = "";
  sendMessage(message);
});

function sendMessage(message) {
  socket.emit("new-message", {
    message,
  });
}

function main() {
  socket.on("new-message", (data) => {
    appendToChat(data);
  });
}

function appendToChat(data) {
  const div = document.createElement("div");
  if(socket.id === data.socketId){
    div.classList.add("message", "sent");
  }else{
    div.classList.add("message", "received");
  }
  
  div.innerHTML = `<p>${data.socketId} - ${data.message}</p>`;
  chatBox.append(div);
}

main();
