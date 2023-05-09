import { io } from "socket.io-client"

const socket = io();

const chatHistory = []



socket.on("connect", () =>{
    console.log("you connected")
    socket.emit("test");
})

function sendMsg(msg){
    if (msg === "") return;
    displayMsg(msg, "user1")
    chatHistory.push(msg)

    socket.emit("msgSend", msg);

    document.getElementById('UserMsg').value = "";
}

socket.on("msgRecive", (msg) => {
    displayMsg(msg, "user2")
})

function displayMsg(msg, userName){
    const msgBox = document.createElement('div');
    const newMsg = document.createElement('p');
    const text = document.createTextNode(userName + ": " + msg);

    msgBox.setAttribute('class', 'messageBox');

    newMsg.appendChild(text);
    msgBox.appendChild(newMsg);
    document.getElementById("TextTimeLine").appendChild(msgBox);
}