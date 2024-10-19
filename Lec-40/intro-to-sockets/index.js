const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

const users = {
    "123": "rahul",
    "457": "Rakesh_DON"
}

io.on("connection", (socket) => {
    console.log("user connected", socket.id);

    /**
     * data = {
     *      username: ""
     * }
     */
    socket.on("set-username", (data) => {
        users[socket.id] = data.username;
    })

    socket.on("new-message", (data)=>{
        console.log(data);
        io.emit("new-message", {
            ...data,
            socketId: socket.id,
            username: users[socket.id]
        });
    })

});

server.listen(PORT, () => {
  console.log("Server is up at port", PORT);
});
