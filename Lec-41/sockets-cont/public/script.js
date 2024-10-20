const socket = io();

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");
const usernameContainer = document.querySelector('.set-username-container');
const chatContainer = document.querySelector('.chat-container');

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
  const inp = usernameContainer.children[0];
  const setUsernameBtn = usernameContainer.children[1];

  setUsernameBtn.addEventListener('click', (e) => {
    const username = inp.value;
    inp.value = '';

    if(username.length < 2){
      return;
    }

    socket.emit("set-username", {
      username
    })

    showchatBox();
  })

  socket.on("new-message", (data) => {
    appendToChat(data);
  });
}

function appendToChat(data) {
  const div = document.createElement("div");
  if(socket.id === data.socketId){
    div.classList.add("message", "sent");
    div.innerHTML = `<p>${data.message}</p>`;
  }else{
    div.classList.add("message", "received");
    div.innerHTML = `<p>${data.username} - ${data.message}</p>`;
  }
  
  chatBox.append(div);
}

function showchatBox(){
  usernameContainer.style.display = "none";
  chatContainer.style.display = "block";
}

main();
