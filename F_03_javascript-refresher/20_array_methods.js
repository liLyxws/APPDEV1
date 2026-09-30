const students = [
  { name: "Lily", grade: 88 },
  { name: "Miles", grade: 95 },
  { name: "Sam", grade: 42 },
];

const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name));

const miles = students.find(s => s.name === "Miles");
console.log(miles);

console.log(students.some(s => s.grade < 60));
console.log(students.every(s => s.grade >= 60));

const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name));
