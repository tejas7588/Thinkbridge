// Object creation
const person = {
  name: "Tejas",
  age: 22,
  isStudent: true,
  greet: function () {
    return `Hi, I'm ${this.name}`;
  },
};

console.log(person.greet());

// Accessing properties
console.log(person.name);
console.log(person["age"]);

// Adding a new property
person.city = "Pune";
console.log(person);

// Iterating over properties
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys + forEach
Object.keys(person).forEach((prop) => {
  console.log(`${prop}: ${person[prop]}`);
});
