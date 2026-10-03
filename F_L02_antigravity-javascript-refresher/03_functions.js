function greet(name) {
  return "Hello, " + name;
}

const square = (num) => {
  return num * num;
};

function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b
  };
}

console.log(greet("Lily"));
console.log(square(5));
console.log(calculator(5, 4));
