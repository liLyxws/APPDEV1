const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const user = { name: "Lily", age: 19 };
const newUser = { ...user, course: "BSIT" };
console.log(newUser);

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(2, 4, 6));
