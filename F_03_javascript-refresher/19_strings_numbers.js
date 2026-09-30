const raw = "  Lily Cruz  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase());
console.log(clean.includes("Cruz"));
console.log(clean.slice(0, 4));
console.log(`Full name: ${first} ${last}`);

console.log(parseInt("42px"));
console.log((19.9999).toFixed(2));

const result = "abc" / 2;
console.log(result);
console.log(Number.isNaN(result));
