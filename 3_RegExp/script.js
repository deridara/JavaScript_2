const regExp = /^'|(?<=[.,!?])'|(?<= )'(?=.)/gm;
const textProcessBtn = document.querySelector('#processBtn');
const textarea = document.querySelector('textarea');

textarea.value = `'I'm going to steal Anna's kitten,' said the Ghost.
'Oh no, you can't!' answered Mary.
'Oh yeah, I can.'
'No!' Mary cried. 'It's her parents' kitten!'`



textProcessBtn.addEventListener('click', function() {
    const text = textarea.value;
    textarea.value = text.replace(regExp, '"');
})

const nameRE = /[а-яА-Я\w]/;
const phoneRE = /\+7\(\d{3}\)\d{3}-\d{4}/
const mailRE = /\w+\-?\.?\w+@[\w]+\.(ru|com)/

