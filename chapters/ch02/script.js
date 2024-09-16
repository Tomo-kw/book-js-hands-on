// P48
// let inputName = prompt("名前を入力してください") || "未入力";
// console.log(inputName);

// P48
// let promptInt = (msg) => parseInt(prompt(msg));
// // 以下だと0が正しく評価されない
// // let num = promptInt("整数を入力してください") || -9999;
// // Null合体演算子を使う
// let num = promptInt("整数を入力してください") ?? -9999;

// console.log(num);

// ビット演算
// console.log((0b1100 & 0b1010).toString(2));
// console.log((0b1100 | 0b1010).toString(2));
// console.log((0b1100 ^ 0b1010).toString(2).padStart(4, "0"));

// シフト演算子
console.log((0b111 << 3).toString(2));
// '111000'

// 配列
const days = [31, 28, 31, 30, 31];
const porrelle = ["the enxt", 3, days];
// const porrelle = ["the enxt", 3, ...days];

// console.log(porrelle);

// console.log([..."the next"]);

// 要素数より多い数を指定した場合、その間にある要素は empty になる
porrelle[6] = 2025;
console.log(porrelle);
//  結果：['the enxt', 3, Array(5), empty × 3, 2025]

// 計算によるプロパティ名
const hoge = {
  ["加藤" + 123]: "9段",
};
console.log(hoge);
