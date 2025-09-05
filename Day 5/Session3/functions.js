// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Tejas"));

// Function expression
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 10));

// Arrow function
const multiply = (x, y) => x * y;
console.log(multiply(3, 4));

// Block scope
{
  let scopedVar = "I exist only inside this block";
  console.log(scopedVar);
}
// console.log(scopedVar); // ❌ Error: not defined

// var is function-scoped
function testVar() {
  if (true) {
    var test = "I am function scoped";
  }
  console.log(test); // Works
}
testVar();
