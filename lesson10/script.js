'use strict';

const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');

console.log(books);
console.log(book);

books[0].append(book[1]);
books[0].append(book[0]);
books[0].append(book[4]);
books[0].append(book[3]);
books[0].append(book[5]);
books[0].append(book[2]);

let container = document.querySelector('body');
container.classList.add('bg');
container.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const book3 = document.querySelectorAll('a');
book3[2].innerHTML = "Книга 3. this и Прототипы Объектов";

const interpr = document.querySelectorAll('.adv');
interpr[0].remove();



// это костыль, но пока, другого не придумал

const bookAll = document.querySelectorAll('ul');
const book2 = document.querySelectorAll('li');

bookAll[1].append(book2[6]);
bookAll[1].append(book2[7]);
bookAll[1].append(book2[9]);
bookAll[1].append(book2[12]);
bookAll[1].append(book2[14]);
bookAll[1].append(book2[10]);
bookAll[1].append(book2[11]);
bookAll[1].append(book2[13]);
bookAll[1].append(book2[15]);
bookAll[1].append(book2[8]);
bookAll[1].append(book2[16]);

const book6 = book2[55];
book6.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');










