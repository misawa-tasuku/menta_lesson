'use strict';

// const sarvants = ['犬', '猿', '雉']; 

// function showSarvants (newcomer) {
//   sarvants.push(newcomer);
//   console.log('現在の家来は:');
//   for (const sarvant of sarvants){
//     console.log(sarvant);
//   }
//   console.log(`の総勢は${sarvants.length}名です。`);
// }

// showSarvants('鬼');
// showSarvants('桃');
// showSarvants('爺');

function getArray(){
  return ['A', 'B', 'C'];
}

const array = getArray();
console.log(array[1]);

function getObject() {
  return {a: 'A', b: 'B', c: 'C'}; 
}
const obj = getObject();
console.log(obj.a); 

const [a, b, c] = getArray();

console.log(a);
console.log(b);
console.log(c);
