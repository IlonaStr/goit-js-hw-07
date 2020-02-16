 'use strict';

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallery = document.querySelector('#gallery');
 
    function picturesLayout({url, alt}) {
    const pics = `<li class = "pictures__item"><img src = ${url}, alt = ${alt} class = "pictures__img"></li>`;
    return pics;
    }

    const sketch = picturesLayoutList(images);
    function picturesLayoutList(images) {
      return images.reduce((sketch, el) => sketch += picturesLayout(el), '');
    }

    gallery.innerHTML = sketch;