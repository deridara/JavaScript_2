const lastMsgBtn = document.querySelector('#last-msg-btn');
const msgDiv = document.querySelector('.last-msg');
lastMsgBtn.addEventListener('click', function () {
    const text = getLastMsg()
    msgDiv.innerText = text;
    console.log(text);
})

const newMsgBtn = document.querySelector('#new-msg-btn');
const msgTextField = document.querySelector('#new-msg');
newMsgBtn.addEventListener('click', function() {
    const text = msgTextField.value;
    sendMsg(text);
    console.log('clicked');
})



