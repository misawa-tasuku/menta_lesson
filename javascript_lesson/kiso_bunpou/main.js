'use strict';

console.log('Hello world from main.js')


// console.log('hello');
// console.log("hello");

// console.log('it's me!');
// console.log("it's me!");
// console.log('it\'s me!');

// console.log('hel\nlo wor\tld');

// console.log('hello' + 'world');

//定数

/* const price = 150;

console.log(150 * 140);
console.log(150 * 160);

console.log(price * 140);
console.log(price * 160);
 */

// 変数
/* let price = 150;
console.log(price * 140);
console.log(price * 160);

price = 170;
console.log(price * 140);
console.log(price * 160);
 */

// 変数
/* let price = 500;
price += 100;

price *= 2;

price++;

price--;
console.log(price) */
/* 
console.log(typeof ' hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null) */

/* 
console.log('5' * 3);
console.log('5' - '3');

console.log('5' + 3);
console.log(parseInt(('5', 10), 10));
console.log(parseInt('hello', 10)); */

// 比較演算子
/* 
const price = 1200;

console.log(price > 1000);
console.log(price < 1000);
console.log(price >= 1000);
console.log(price <= 1000);
console.log(price === 1000);
console.log(price !== 1000);

console.log(Boolean(0));
console.log(Boolean('hello'));
 */

// if
/* 
const score = 65;

if(score >= 80){
  console.log('Great!');
}else if(score >= 60){
  console.log('Good.');
}else{
  console.log('OK...');
}
 */

// 条件演算子
/* const score = 65;
score >= 80 ? console.log('Great!') : console.log('OK...!');
 */

/* const score = 60;
const name = 'taguchi';

if(score >= 50 && name === 'taguchi'){
  console.log('Good job!');
} */

// switch

/* const signal = 'pink';

switch(signal){
  case 'red':
    console.log('Step!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green':
    console.log('Go!');
    break;
  default:
    console.log('Wrong signal!');
    break;
} */

// for
/* 
for (let i = 1; i < 10; i++){
  // console.log('hello');
  // console.log('hello' + i);
  console.log(`hello ${i}`);
} */

// while

/* 
let hp = 100;
while(hp > 0){
  console.log(`${hp} HP left!`);
  hp -= 15;
}
 
let hp = -50;

do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0);
*/

/* for (let i = 1; i <= 10; i++){
  /* if(i === 4){
    if(i % 3 === 0){
      continue;
    } 
  if(i === 4){
      break;
    }
    console.log(i);
} 
*/

// 関数
/* function showAd(){
  console.log('----------');
  console.log('--- Ad ---');
  console.log('----------');
}

showAd();
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd(); */

// 引数

/* function showAd(message = 'Ad') { // 仮引数
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}

showAd('Header Ad'); // 実引数
console.log('Tom is great!');
console.log('Bob is great!');
// showAd('Ad');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad'); */

// 戻り値
/* function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
  console.log(a + b + c);
}

//sum(1, 2, 3);
//sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
console.log(total); */

 /* 
const double = a => a * 2;
console.log(double(12)); */

/* const x = 2;

function f() {
  // const x = 1;
  console.log(x);
}

f();
console.log(x); */

{
  const x = 100;
  console.log(x);
}