const regExp = /((?<=[.,!? ])'|^'|'(?=\s))/gm;
const textProcessBtn = document.querySelector('#processBtn');
const textarea = document.querySelector('textarea');
textProcessBtn.addEventListener('click', function() {
    const text = textarea.value;
    textarea.value = text.replace(regExp, '"');
})