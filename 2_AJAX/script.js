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
            console.log('пришло: ' + a, typeof a);
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
            console.log(xhr.responseText)
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
            console.log('done');
        }
    }

    xhr.send();
    return xhr.responseText;
}