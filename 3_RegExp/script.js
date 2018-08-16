const regExp = /^'|(?<=[.,!?])'|(?<= )'(?=.)/gm;
const textProcessBtn = document.querySelector('#processBtn');
const textarea = document.querySelector('textarea');

textarea.value = `'I'm going to steal Anna's kitten,' said the Ghost.
'Oh no, you can't!' answered Mary.
'Oh yeah, I can.'
'No!' Mary cried. 'It's her parents' kitten!'`;

textProcessBtn.addEventListener('click', function () {
    const text = textarea.value;
    textarea.value = text.replace(regExp, '"');
})

const nameRE = /^[а-яА-Яa-zA-Z]+$/;
const phoneRE = /^\+7\(\d{3}\)\d{3}-\d{4}$/
const mailRE = /^\w+\-?\.?\w+@[\w]+\.(ru|com)$/

const chekBtn = document.querySelector('#checkBtn');
chekBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const mail = document.getElementById('mail').value;
    let result = true;
    let errorFields = [];
    
    if (nameRE.test(name)) {
        fieldIsOk('name');
        console.log('cheked name')
    } else {
        errorFields.push('name');
        result = false;
    }
    if (phoneRE.test(phone)) {
        fieldIsOk('phone');
        console.log('cheked phone')
    } else {
        errorFields.push('phone');
        result = false;
    }
    if (mailRE.test(mail)) {
        fieldIsOk('mail');
        console.log('cheked mail')
    } else {
        errorFields.push('mail');
        result = false;
    }
    
    if(result) {
        alert('All fields are OK!');
    } else {
        console.log(errorFields);
        for (let field of errorFields) {
            showErrorField(field);
        }
    }

})

function showErrorField(fieldID) {
    console.log(fieldID);
    const field = document.getElementById(fieldID);
    field.className = 'error';
    return;
}

function fieldIsOk(fieldID) {
    const field = document.getElementById(fieldID);
    field.className = '';
    return;
}
