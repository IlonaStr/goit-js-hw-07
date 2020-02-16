'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const inserted = () => {
    if (inputName.value === '') {
        outputName.textContent = 'незнакомец';
    } else {
        outputName.textContent = inputName.value;
    }
    
}

inputName.addEventListener('input', inserted)