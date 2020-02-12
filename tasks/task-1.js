'use strict';

const item = document.querySelectorAll('.item');
console.log(`В списке ${item.length} категории`);

item.forEach( el => console.log(`Категория ${el.querySelector('h2').textContent}; 
Количество элементов ${el.children[1].children.length}`));