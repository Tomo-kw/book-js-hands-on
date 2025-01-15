document.body.addEventListener("click", (evt) => {
  evt.target.style.backgroundColor = `#${Math.floor(
    Math.random() * 0xffffff
  ).toString(16)}`;
});

document.body.addEventListener("click", () =>
  console.log("最初のイベントハンドラ")
);
let secondHandler = () => console.log("2番目のイベントハンドラ");

document.body.addEventListener("click", secondHandler);

document.body.removeEventListener("click", secondHandler);

document.body.dispatchEvent(new Event("click"));
