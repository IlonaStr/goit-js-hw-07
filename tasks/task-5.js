'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const inserted = () => {
    inputName.value === '' ? (outputName.textContent = 'незнакомец') : (outputName.textContent = inputName.value);
}

inputName.addEventListener('input', inserted)