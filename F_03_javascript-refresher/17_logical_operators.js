const values = [0, "", "hello", null, undefined, [], {}];

values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

const username = "lily";
const password = "abc123";
const canLogIn = username !== "" && password !== "";
console.log(canLogIn);

const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch);

console.log("" || "default");
console.log(username && "Welcome!");
