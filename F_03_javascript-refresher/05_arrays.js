let favoriteSnacks = ["chips", "chocolate", "fries"];
favoriteSnacks.push("candy");
favoriteSnacks.shift();

for (const snack of favoriteSnacks) {
  console.log(snack);
}

const liked = favoriteSnacks.map(snack => "I like " + snack);
console.log(liked);
