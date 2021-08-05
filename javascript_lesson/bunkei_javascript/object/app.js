'use strict';

// const array = [1, 2, 'dog', 1, 2, 'cat!'];

// console.log(array[2]);

// const animal = array[2];
// console.log(animal);

// array[3] = 'pig!'
// console.log(array);
// array[4] += array[0];
// console.log(array);

// const array = [1, 2, 3, 'dah', '!!'];

// for (let i = 0; i < 5; i += 1){
//   console.log(array[i]);
//   array[i] = i;
// }

// console.log(array);
// console.log(array.length);

// const array = [1, 2, 3];
// for (const el of array){
//   console.log(el);
// }

// const array = [0, 1, 2, 3];
// array[array.length] = 'end';
// console.log(array);

// console.log(array[4]);

// let x;
// console.log(x);

// if (x == undefined){
//   console.log('xが未定義')
// }

// const array = [1, 2, 3];

// array.push(4);
// array.unshift(0);
// array.pop();
// array.shift();
// console.log(array)

// const array = [1, 2, 3];

// const tail = array.pop();
// console.log(tail);

// let head = array.shift();
// console.log(head);

// array.splice(1, 0, 'A');
// array.splice(2, 1);
// console.log(array);

// const array = ['a', 'b', 'c'];

// const index = array.indexOf('b');

// if(index != -1){
//   array.splice(index, 1);
// }
// console.log(array);

// const array = [1, 2, 3];

// const newArray = array.map((el) => el + '号');
// console.log(newArray);

// const newArray2 = [];
// for (const el of array){
//   newArray2.push(el + '号')
// }

// console.log(newArray2);

const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];

const ul = document.getElementById('list');
for (const eto of etoList){
  const li = document.createElement('li');
  li.textContent = eto;
  ul.appendChild(li);
}