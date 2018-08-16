const regExp = /((?<=[.,!? ])'|^'|'(?=\s))/gm;
const textProcessBtn = document.querySelector('#processBtn');
const textarea = document.querySelector('textarea');

textarea.value = `'I'm going to steel Anna's cookie,' said the Ghost.
'Oh no, you can't!' answered Mary.
'Oh yeah, I can.'
'No!' Mary cried. 'You can't do it now!'`



textProcessBtn.addEventListener('click', function() {
    const text = textarea.value;
    textarea.value = text.replace(regExp, '"');
})