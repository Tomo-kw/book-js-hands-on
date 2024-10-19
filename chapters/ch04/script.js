// オブジェクト指向プログラミング
// 1. ベクトルの座標を表す値
// 2. ベクトルの長さの２乗を求める関数
// 3. ベクトル同士を足し合わせる関数

// let vector2 = {
//   x: 3,
//   y: 4,
//   lengthSq: (self) => self.x * self.x + self.y * self.y,
//   add: (self, other) => {
//     self.x += other.x;
//     self.y += other.y;
//   },
// };

// console.log(vector2.lengthSq(vector2));

// オブジェクトを生成するための関数を定義
// x, y を引数で受け取ること使いまわせる
// const Vector2 = (x, y) => {
//   return {
//     x,
//     y,
//     lengthSq: (self) => self.x * self.x + self.y * self.y,
//     add: (self, other) => {
//       self.x += other.x;
//       self.y += other.y;
//     },
//   };
// };

// vector2a = Vector2(20, 22);
// vector2b = Vector2(22, 20);

// vector2a.add(vector2a, vector2b);
// console.log(vector2a);

// Vector2 関数が呼ばれるたびに lengthSq, add 関数が新しく定義されることを避ける
// const Vector2_lengthSq = (self) => self.x * self.x + self.y * self.y;
// const Vector2_add = (self, other) => {
//   self.x += other.x;
//   self.y += other.y;
// };

// const Vector2 = (x, y) => {
//   return {
//     x,
//     y,
//     lengthSq: Vector2_lengthSq,
//     add: Vector2_add,
//   };
// };
// vector2a = Vector2(2, 4);
// vector2b = Vector2(10, 20);
// vector2a.add(vector2a, vector2b);

// console.log(vector2a);

// 3次元ベクトルを考えてみる
// 条件：継承元の2次元ベクトルの実装を利用する
// const Vector3_lengthSq = (self) =>
//   self.x * self.x + self.y * self.y + self.z * self.z;

// const Vector3_add = (self, other) => {
//   self.parent.add(self, other);
//   self.z += other.z;
// };

// const Vector3 = (x, y, z) => {
//   let parent = Vector2(x, y);
//   return {
//     parent,
//     ...parent,
//     z,
//     lengthSq: Vector3_lengthSq,
//     add: Vector3_add,
//   };
// };

// vector3a = Vector3(1, 4, 5);

// vector3a.lengthSq(vector3a);

// vector3b = Vector3(41, 38, 37);

// vector3a.add(vector3a, vector3b);

// vector3a;

// クラスを使って書き換える
// class Vector2 {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   lengthSq() {
//     return this.x * this.x + this.y * this.y;
//   }

//   add(that) {
//     this.x += that.x;
//     this.y += that.y;
//   }

//   get length() {
//     return Math.sqrt(this.lengthSq());
//   }

//   set length(len) {
//     const ratio = len / this.length;
//     this.x *= ratio;
//     this.y *= ratio;
//   }
// }

// class Vector3 extends Vector2 {
//   constructor(x, y, z) {
//     super(x, y);
//     this.z = z;
//   }
//   lengthSq() {
//     return super.lengthSq() + this.z * this.z;
//   }

//   add(that) {
//     super.add(that);
//     this.z += that.z;
//   }
// }

// let v3a = new Vector3(1, 4, 5);
// let v3b = new Vector3(41, 38, 37);
// // console.log(v3a.lengthSq());
// v3a.add(v3b);
// // console.log(v3a);

// vec = new Vector2(3, 4);
// console.log(vec.length);
// vec.length = 50;
// console.log(vec.length);

// class Vector2 {
//   static instanceCount = 0;

//   static incrementCount() {
//     this.instanceCount++;
//   }

//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     Vector2.incrementCount();
//   }
// }

// new Vector2(1, 1);
// console.log(Vector2.instanceCount);

// __proto__を使うことが継承できる
// tusk2でtusk1のメソッドを呼び出せる
// let tusk1 = {
//   cry: "Chumimin",

//   act1() {
//     console.log(this.cry);
//   },
// };

// let tusk2 = {
//   __proto__: tusk1,

//   act2() {
//     super.act1();
//     console.log("tail");
//   },
// };

// console.log(tusk2.cry);
