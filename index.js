const { add, multiply } = require("./utils");

const add2 = add(2);
const a = add2(3);
const multiplyByA = multiply(a);
const b = multiplyByA(2);

console.log(a, b);