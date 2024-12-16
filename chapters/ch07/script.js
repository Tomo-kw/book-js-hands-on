const days = Array.of(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

// console.log(days);
const pourelle = Array.of("the next", 3, days);

// console.log(pourelle);

// Setオブジェクトは重複を許さない値の集合を保持する
// console.log(new Set(days));

// 同じ値で初期化された任意の要素数の配列を生成する
// console.log(new Array(5).fill("無駄"));

const a = [1, 2, 3, 4, 5].copyWithin(2);

// console.log(a);

// Mapオブジェクトはキーと値のペアを保持する
let userRoles = new Map();
userRoles.set("alice", "admin");
userRoles.set("bob", "editor");
// console.log(userRoles.get("alice")); // "admin"

// ジェネレータ関数
function* generatorFunc() {
  return "1200kVA";
}

generator = generatorFunc();

console.log(generatorFunc);

console.log(generator.next());
console.log(generator[Symbol.iterator]());
