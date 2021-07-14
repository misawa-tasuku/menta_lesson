'use strict';

// console.log('Hello world');

const p1 = document.getElementById('dom');
console.log(p1.textContent);

const p2 = document.querySelector('p');
console.log(p2.textContent);

// const lis = document.querySelectorAll('li');

// for (const li of lis){
//   console.log(li.textContent);
//   li.textContent = "DOM!!";
// }

// const lisArray = Array.from(lis);
// const newLis = lisArray.map((li) => li.textContent + '!!');
// console.log(newLis);

// const lis = document.getElementsByTagName('li');
// console.log(lis);

// for (const li of lis){
//   console.log(li.textContent);
// }

// const lisArray = Array.from(lis);
// lisArray.forEach((li) => li.textContent = 'DOM!');

// const img = document.getElementsByTagName('img')[0];

// const img = document.getElementsByTagName('img')[0];

// const img = HTMLCollection[0];

// const img = Element;
// console.log(img);

// console.log(lis[0].textContent)
// console.log(lis[1].textContent)
// console.log(lis[2].textContent)

// const ps = document.getElementsByClassName('explain');
// console.log(ps);

// const inputs = document.getElementsByName('dom');
// console.log(inputs);

// const a = document.getElementById('link');
// console.log(a);

// const p = a.parentElement;
// console.log(p);

// const img = a.firstElementChild;
// console.log(img);

// const ul = document.getElementById('list');

// const li1 = ul.firstElementChild;
// console.log(li1.textContent);

// const li2 = li1.nextElementSibling;
// console.log(li2.textContent);

// const li3 = ul.lastElementChild;
// console.log(li3.textContent);

// const ul = document.getElementById('list');

// for (let li = ul.firstElementChild; li != null; li = li.nextElementSibling){
//   console.log(li.textContent);
// }

const ul = document.getElementById('list');
const newLi = document.createElement('li');
newLi.textContent = 'DOM!!';

const li1 = ul.firstElementChild;
ul.replaceChild(newLi, li1);
// ul.appendChild(newLi);
