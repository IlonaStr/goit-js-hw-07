'use strict';

let counterValue = 0;
const encounter = document.querySelector('#value');

const increment = () => {
counterValue +=1;
encounter.textContent = counterValue;
}
const decrement = () => {
counterValue -=1;
encounter.textContent = counterValue;
}

encounter.previousElementSibling.addEventListener('click', decrement);
encounter.nextElementSibling.addEventListener('click', increment);