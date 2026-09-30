const score = 75;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result);

const num = 9;
console.log(num % 2 === 0 ? "even" : "odd");

const user = { name: "Lily" };
console.log(user.address?.city);

const age = 0;
console.log(age || 18);
console.log(age ?? 18);
