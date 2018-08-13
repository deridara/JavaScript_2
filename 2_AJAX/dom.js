const lastMsgBtn = document.querySelector('#last-msg-btn');
const msgDiv = document.querySelector('.last-msg');
lastMsgBtn.addEventListener('click', function () {
    const text = getLastMsg()
    msgDiv.innerText = text;
    console.log(text);
})

const newMsgBtn = document.querySelector('#new-msg-btn');
const msgTextField = document.querySelector('#new-msg');
newMsgBtn.addEventListener('click', function () {
    const text = msgTextField.value;
    sendMsg(text);
    console.log('clicked');
})

const userForm = document.querySelector('#user-form');
const submitBtn = document.querySelector('#submit-btn');
const checkBtn = document.querySelector('#check-btn');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const age = document.querySelector('#age').value;

    if (!uniqueEmail(email)) {
        alert('Пользователь с такой почтой уже существует');
        event.stopPropagation();
        return false;
    }

    const newUser = {
        name,
        email,
        age
    };
    
    sendNewUser(JSON.stringify(newUser));
    console.log(getUsersArray.length);
    return true;
})

checkBtn.addEventListener('click', function () {
    const email = document.querySelector('#email').value;
    return checkEmail(email);

    if (!uniqueEmail(email)) {
        alert('Пользователь с такой почтой уже существует');
        return false;
    } else {
        alert('Пользователя с такой почтой еще нет')
    }

})

function uniqueEmail(email) {
    const users = JSON.parse(getUsersArray());
    return !usersContainEmail(email, users);
}
