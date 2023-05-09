const socket = io();

function joinRoom(RoomId){
    window.location.href = "/privChatRoom/" + RoomId;
}