const person = { name: "Lily", age: 19 };
const { name, age } = person;
console.log(name, age);

const hobbies = ["reading", "drawing", "gaming"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log(name);
}

printName(person);
