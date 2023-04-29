const colorPickers = document.querySelectorAll('.box__options__colors__color');
const gradientBox = document.querySelector('.box__gradientColor');
const colorDirection = document.querySelector('.box__options__select');
const cssTextArea = document.querySelector('.box__cssCode__text');
const refreshBtn = document.querySelector('.box__btns__refresh');
const copyBtn = document.querySelector('.box__btns__copy');


function makeGradient(randHex = 0){
    const gradient = `linear-gradient(${colorDirection.value}, ${randHex[0] || colorPickers[0].value }, ${randHex[1] || colorPickers[1].value})`;
    gradientBox.style.backgroundImage = gradient;
    cssTextArea.textContent = 'background-image: ' + gradient;
}

function randHexGenerator () {
    const hexValues = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return hexValues;
}

function randomGradient(randHex){
    colorPickers[0].value = randHex[0];
    colorPickers[1].value = randHex[1];
    makeGradient(randHex);
}

colorDirection.addEventListener('change', makeGradient);
colorPickers.forEach(input => {
    input.addEventListener('input', makeGradient);
})

refreshBtn.addEventListener('click', () => {
    const randHex = [randHexGenerator(), randHexGenerator()]
    randomGradient(randHex);
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(cssTextArea.value);
})
