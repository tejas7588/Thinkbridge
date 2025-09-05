// 1. Variables

let name = "Alice";
const age = 25;
var city = "New York";

let name1 = "tejas";
const age1 = 23;
var city1 = "India";

console.log("Variables:");

console.log(name, age, city);
console.log("------------------------");
console.log(name1, age1, city1);

// 2. Strings

let greeting = "Hello";
let target = "World";
console.log(greeting.concat(target));

// Concatenation
let message = greeting + " " + target + "!";

// Template literals
let intro = `My name is ${name1} and I am ${age1} years old.`;

console.log("Strings:");
console.log(message);
console.log(intro);
console.log("------------------------");

// 3. Arrays
let fruits = ["apple", "banana", "cherry"];
let color = ["white", "black", "orange"];

// Access
console.log("Arrays:");
console.log("First fruit:", fruits[0]);
console.log(color[2]);

// Add new element
fruits.push("orange");

// Loop through array
console.log("Fruit list:");
for (let fruit of fruits) {
console.log(fruit);
}
console.log("------------------------");

// 4. Conditionals
let score = 94;

console.log("Conditionals:");
if (score >= 90) {
console.log("Grade: A");
} else if (score >= 75) {
console.log("Grade: B");
} else {
console.log("Grade: C");
}
console.log("------------------------");

// 5. Loops

// For loop
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
console.log("Number:", i);
}

// While loop
console.log("While loop:");
let count = 0;
while (count < 3) {
console.log("Count is", count++);
}
console.log("------------------------");

Variables:
Alice 25 New York

---

tejas 23 India

Strings:
Hello World!
My name is tejas and I am 23 years old.

---

Arrays:
First fruit: apple
orange
Fruit list:
apple
banana
cherry
orange

---

Conditionals:
Grade: A

---

For loop:
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5

While loop:
Count is 0
Count is 1
Count is 2

---
