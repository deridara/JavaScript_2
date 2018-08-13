function getLastMsg() {
    const xhr = new XMLHttpRequest();
    let a;
    xhr.open('GET', 'http://89.108.65.123/getMessage', false);

    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.error(xhr.status, ': ', xhr.statusText)
        } else {
            a = xhr.responseText;
            console.log('got last message');
        }
    }

    xhr.send();
    console.log('проверка' + a, typeof a);
    return a;
}

function sendMsg(msg) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //        console.log(xhr.readyState);
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.error(xhr.status, ': ', xhr.statusText)
        } else {
            console.log('sent new message')
        }
    }
    xhr.open('POST', 'http://89.108.65.123/sendMessage', true);
    xhr.send(msg);
    return;
}


function getUsersArray() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://89.108.65.123/user', false);

    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.error(xhr.status, ': ', xhr.statusText)
        } else {
            console.log('got user array');
        }
    }

    xhr.send();
    return xhr.responseText;  
}

function usersContainEmail (newMail, users) {
    for (let user of users) {
        if (user.email === newMail) return true;
        console.log(user.email);
    }
    return false;
}

function sendNewUser (user) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://89.108.65.123/user/', false);
    xhr.onreadystatechange = function () {
        //        console.log(xhr.readyState);
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.error(xhr.status, ': ', xhr.statusText)
        } else {
            console.log('sent new User')
        }
    }
    
    xhr.send(user);
}