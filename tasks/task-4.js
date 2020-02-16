'use strict';

const encounter = document.querySelector('#value');

const increment = () => {
++encounter.textContent;

}
const decrement = () => {
--encounter.textContent;
}

encounter.previousElementSibling.addEventListener('click', decrement);
encounter.nextElementSibling.addEventListener('click', increment);