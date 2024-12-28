let start = Date.now();
while (true) {
  if (Date.now() - start > 3 * 1000) {
    break;
  }
}
// console.log("3秒経過");

// document.open();
// document.write("<button id='btn'>ボタン</button>");
// let button = document.getElementById("btn");
// console.log(button);
// let callbackFunc = () => console.log("クリックされました");
// button.addEventListener("click", callbackFunc);

let src = "https://www.technohippy.dev/handsonjs/ch15/ex1/JavaScript-logo.png";
document.write(`<img id="img" src="${src}">`);
let image = document.getElementById("img");
let callbackFunc = () => console.log("読み込みが完了しました");
// image.addEventListener("load", callbackFunc); // 画像の読み込みが完了したときにコールバック関数を実行する

// Promise.resolve(42).then(
//   (value) => `成功${value}`,
//   (error) => error
// );

// Promise.reject(new Error("失敗")).then(
//   (value) => `成功${value}`,
//   (error) => error
// );

// Promise.reject()
//   .then(
//     () => console.log("成功1"),
//     () => console.log("エラー1")
//   )
//   .then(
//     () => console.log("成功2"),
//     () => console.log("エラー2")
//   );

async function showHtml(url) {
  try {
    const google = await fetch(url);
    const body = await google.text();
    console.log("本文表示", body);
  } catch (err) {
    console.warn("エラー表示", err);
  }
}

showHtml("https://www.google.com");
showHtml("https://twitter.com");
