'use strict';

// const obj = { a: 'A', b: 'B', c: 'C' };

// // プロパティ名 a を直接指定する
// console.log(obj.a);     // → A （ドット記法）
// console.log(obj['a']);  // → A （ブラケット記法）

// const prop = 'a';
// console.log(obj.prop);
// console.log(obj.prop);

// const obj = {a: 'A', b: 'B', c: 'C'};

// // オブジェクトを反復する「for-in」
// for (const prop in obj){
//   console.log(prop);
//   console.log(obj[prop]);
// }

// const profile = {
//   name: 'OJK',
//   bloodType: 'A',
//   servants: ['犬', '猿', '雉'],
//   style: { height: 165, weight: 52, waist: 76 },
// };

// // console.log(profile.style.height);
// for (const servant of profile.servants){
//   console.log(`家来: ${servant}`);
// }

// const myStyle = profile.style;
// for (const prop in myStyle){
//   console.log(`${prop} is ${myStyle[prop]}`);
// }

const evList = [
  { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
  { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
  { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
  { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
  { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
  { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
  { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
  { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
];

// for (const ev of evList){
//   console.log(ev.name);
// }

const table = document.querySelector('table');
// const tr = document.createElement('tr');
// const header = ['名前', 'タイプ', '体重', '特技'];

// for (const h of header){
//   const th = document.createElement('th');
//   th.textContent = h;
//   tr.appendChild(th)
// }

// table.appendChild(tr);

// const th1 = document.createElement('th');
// th1.textContent = '名前';
// tr.appendChild(th1);

// const th2 = document.createElement('th');
// th2.textContent = 'タイプ';
// tr.appendChild(th2);

// const th3 = document.createElement('th');
// th3.textContent = '体重';
// tr.appendChild(th3);

// const th4 = document.createElement('th');
// th4.textContent = '特技';
// tr.appendChild(th4);  // これだけしか表示されない

// table.appendChild(tr);

for (const ev of evList) {
  const tr = document.createElement('tr');
  for (const prop in ev) {
    const td = document.createElement('td');
    td.textContent = ev[prop];
    if (prop == 'weight') {  // もしプロパティがweightだったら…
      td.textContent += ' kg';  // +=で kg を追記する
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}