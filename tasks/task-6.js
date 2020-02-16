'use strict';

const input = document.querySelector('#validation-input');

const validating = () => {
    if (input.value.length == input.getAttribute('data-length')){
        input.classList.add('valid');
        input.classList.remove('invalid');
        return
    }
        input.classList.remove('valid');
        input.classList.add('invalid');
    
}

input.addEventListener('blur', validating)