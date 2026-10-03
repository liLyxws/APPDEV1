let favoriteSnacks = ["Chips", "Chocolate", "Fries"];

// Mutating operations: .push() adds to the end, .shift() removes from the front
favoriteSnacks.push("Candy");
favoriteSnacks.shift();

console.log("Remaining snacks:");
for (const snack of favoriteSnacks) {
  console.log("- " + snack);
}

// Non-mutating operation: .map() returns a brand new array
const liked = favoriteSnacks.map(snack => "I like " + snack);

console.log("\nMapped array (liked snacks):");
console.log(liked);
