const socket = io("http://localhost:3000");

const chatHistory = []


const RoomTitle = document.getElementById("title")
const RoomId = RoomTitle.textContent;

socket.on("connect", () =>{
    console.log("you connected to room : ", RoomId)
    socket.emit("addRoom", (RoomId))
});




function sendMsg(msg){
    if (msg === "") return;
    displayMsg(msg, "user1")
    chatHistory.push(msg)

    socket.emit("msgSend", msg);

    document.getElementById('UserMsg').value = "";
}

socket.on("msgRecive", (msg) => {
    displayMsg(msg, "user2")
});

function displayMsg(msg, userName){
    const msgBox = document.createElement('div');
    const newMsg = document.createElement('p');
    const text = document.createTextNode(userName + ": " + msg);

    msgBox.setAttribute('class', 'messageBox');

    newMsg.appendChild(text);
    msgBox.appendChild(newMsg);
    document.getElementById("TextTimeLine").appendChild(msgBox);
};
