'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listOfIngredients = document.querySelector('#ingredients');

    function createList(ingredient) {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    return listItem;
  }
  const array = ingredients.map(listItem => createList(listItem));
  listOfIngredients.append(...array);