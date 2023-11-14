// Require HTTP
const http = require("http");
// Require Express
const express = require("express");
// Require Cors
const cors = require("cors");
// Require Socket.io
const socketio = require("socket.io");
// Setup Express
const app = express();
// Create Port
let port = 4500 || process.env.PORT;
// Set Cors
app.use(cors());
// Create HTTP Server
const server = http.createServer(app);
// Get Request
app.get("/", (req, res) => {
    res.send("Server is Working");
})
// Create Socket Surcet
const io = socketio(server);
// Surcet ON
let users = [{}];
io.on("connection", (socket) => {
    // console.log("New Connection");
    // Joined Receive
    socket.on("joined", ({ user }) => {
        // Set Username using socket.io ID
        users[socket.id] = user;
        // User Joined Broadcast Send
        socket.broadcast.emit("userjoined", { user: "Admin", message: `${users[socket.id]} has joined.` });
        // Welcome Send
        socket.emit("welcome", { user: "Admin", message: `Welcome to the chat ${users[socket.id]}.` });
    })
    // Message
    socket.on("message", ({ message, id }) => {
        io.emit("messagesend", { user: users[id], message, id });
    })
    // Joined Left Receive
    socket.on("disconnect", () => {
        // Left Broadcast Send
        socket.broadcast.emit("left", { message: `${users[socket.id]} has left.` });
    })
})
// Create Server Port and Listen
server.listen(port, () => {
    console.log(`Server is running port http://localhost:${port}`);
})