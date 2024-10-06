// ユークリッドの互助法：以下を繰り返す
// let [a, b] = [7854, 2730];
// const r = a % b;
// [a, b] = [b, r];

// カンマ演算子
// (a = 6), (b = 7), (c = a * 7);
// 結果：42

// ブロック使わないとわかりづらいよね→以下は何も出力されない
// if (false)
//   if (false) console.log(1);
//   else console.log(2);

// for文の条件式なし
// breakがないと無限ループになる
// let i = 0;

// for (;;) {
//   if (3 <= i) break;
//   console.log(i);
//   i++;
// }

// ラベルつきのbreak文
// outer: for (let i = 0; i < 3; i++) {
//   innter: for (let j = 0; j < 3; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     if (i * j === 2) break outer;
//   }
// }

// for-of
// days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// for (const day of days) {
//   console.log(day);
// }

/**
 *
 * エラトステネスの篩と呼ばれるアルゴリズムを使う
 * 指定された数以下の素数を返す関数
 * divisor: 除数
 */
// function getPrimes(max) {
//   let primes = "";

//   outer: for (let i = 1; i < max; i++) {
//     for (let divisor = i - 1; 1 < divisor; divisor--) {
//       if (i % divisor === 0) continue outer;
//     }
//     primes += i + " ";
//   }
//   return primes;
// }
// console.log(getPrimes(10));

// 残余引数
// function getAverage(...ns) {
//   console.log(ns);
//   sum = 0;
//   for (n of ns) {
//     sum += n;
//   }
//   return sum / ns.length;
// }
// console.log(getAverage(22, 32, 42, 52, 62));

// 再帰処理
// function getFactorial(num) {
//   return num === 1 ? 1 : num * getFactorial(num - 1);
// }
// console.log(getFactorial(3));

// function mul(m, n) {
//   return m * n;
// }

// function mulM(m) {
//   return function (n) {
//     return mul(m, n);
//   };
// }
// mul6 = mulM(6);
// console.log(mul6(7));

// let fact = function (num) {
//   return num === 1 ? 1 : num * fact(num - 1);
// };
// console.log(fact(3));

// 残余引数
// const a = ["a", "b"];
// const b = ["c", "d"];

// const hoge = (...piyo) => {
//   console.log(piyo);
// };
// hoge(a, b);

// 3.7.1 エラーの種類
// const myError = Error("Love truth, but pardon error.");
// console.log(myError.message);

// try {
//   console.log("実行される");
//   throw Error("エラーが発生しました");
//   console.log("実行されない");
// } catch (e) {
//   console.log(`補足：${e}`);
// } finally {
//   console.log("後処理");
// }

// try の入れ子で例外になるパターン

// 3.9 練習問題
// 3-2
// for (let i = 0; i < 3; i++) {
//   const j = i * 2;
//   console.log(j);
// }

// 3-3
// const pow = (n, e) => {
//   let result = 1;
//   for (let i = 0; i < e; i++) {
//     result *= n;
//   }
//   return result;
// };

// const powE = (e) => {
//   return (n) => pow(n, e);
// };

// const sumMap = (ary, f) => {
//   let result = 0;
//   for (let n of ary) {
//     result += f(n);
//   }
//   return result;
// };

// console.log(sumMap([1, 4, 5], powE(2)));
// 結果：42

// 3-4
const func = () => {
  try {
    try {
      throw Error("[例外1]");
    } catch ({ message }) {
      throw Error(`${message}[例外処理1]`);
    } finally {
      throw Error("[終了処理1]");
    }
  } catch ({ message }) {
    throw Error(`${message}[例外処理2]`);
  }
};

try {
  func();
} catch ({ message }) {
  throw Error(`${message}[例外処理3]`);
}
