'use strict';

// const bmi = 27;
// console.log(`あなたのBMIは${bmi}です`);

// 条件分岐
// if (bmi > 25) {
//   console.log('肥満です');
// }

// const num1 = 5;
// const num2 = 10;

// if (num1 >= num2) {
//   console.log('num1 は num2 以上の値です');
// }else{
//   console.log('num1 は num2 以下の値です');
// }

// const msg = bmi > 25 ? '肥満です' : '肥満ではありません';
// console.log(msg);

// 入力ダイアログから値を指定する
const bmi = window.prompt('BMIの値を入力してください');
const p_element = document.querySelector('p');
p_element.textContent = `あなたのBMIは${bmi}：`;

// +=で文字列連結
if (bmi > 25) {
  p_element.textContent += '肥満です'; // 25より大きいときに表示
} else if (bmi < 18.5) {
  p_element.textContent += '低体重です';   // 18.5より小さいときに表示
} else {
  p_element.textContent += '適性体重です';   // 25以下のときに表示
}