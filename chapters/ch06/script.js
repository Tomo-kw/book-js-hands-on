42n.toString();

true.toString();

// console.log(Number.MAX_VALUE + Number.MAX_VALUE);
// Infinity

const isbn = "9784873117706";
// console.log(isbn.charAt(3));

const s1 = Symbol("a");
const s2 = Symbol("a");

// console.log(s1 == s2);

function add3(num1, num2) {
  return this + num1 + num2;
}

console.log(add3.apply(1, [16, 25]));
console.log(add3.call(1, 16, 25));
