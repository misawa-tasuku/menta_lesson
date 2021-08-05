'use strict';

// for (let biscuit = 1; biscuit <= 128; biscuit *= 2) {
//   console.log(`ポケットを叩くとビスケットが${biscuit}つ`);
// }

// for (let a = 1; a <= 9; a += 1){
//   for (let b = 1; b <= 9; b += 1){
//     console.log(`${a} * ${b} = ${a * b}`);
//   }
// }

// for (const data of [1, 2, 'dog!', 1, 2, 'cat!']){
//   console.log(data);
// }

const ul = document.getElementById('list');
for (let i = 0; i < 5; i += 1) {
  const li = document.createElement('li');
  li.textContent = `子要素${i}号`;
  ul.appendChild(li);
}
