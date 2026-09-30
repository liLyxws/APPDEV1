function greet(name) {
  return "Hi, " + name;
}

const double = (num) => {
  return num * 2;
};

function calculator(a, b) {
  return { sum: a + b, difference: a - b };
}

console.log(greet("Lily"));
console.log(double(6));
console.log(calculator(10, 4));
