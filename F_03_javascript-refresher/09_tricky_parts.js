console.log(8 == "8");
console.log(8 === "8");

let notDefined;
let empty = null;
console.log(notDefined);
console.log(empty);

const obj = {
  name: "Lily",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const original = [1, 2, 3];
const copyByReference = original;
copyByReference.push(4);
console.log(original);

const copyBySpread = [...original];
copyBySpread.push(5);
console.log(original);
console.log(copyBySpread);
