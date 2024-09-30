const socket = io('http://localhost:8000');

//get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")


let audio = new Audio('ring.mp3');

//function which will append event info to the container
const append = (message , position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position == 'left'){
        audio.play();
    }
}


const name = prompt("enter your name to join ");
socket.emit('new-user-joined',name);

socket.on('user-joined',name =>{
    append(`${name} joined the chat`,'right')
})

socket.on('receive', data =>{
    append(`${data.name}:${data.message}`,'left')
})

socket.on('left', name =>{
    append(`${data.name} left the chat`,'right')
})


//if form get submitted, send server the message
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You : ${message}`,'right');
    socket.emit('send',message);
    messageInput.value = ''
})
