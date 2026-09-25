// 09_tricky_parts.js - JavaScript Tricky Parts & Pitfalls

console.log("=== 1. Equality: == vs ===");
// Loose equality performs type coercion, strict equality checks both type and value
console.log('5 == "5":', 5 == "5");   // true
console.log('5 === "5":', 5 === "5"); // false
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false
console.log('false == 0:', false == 0); // true
console.log('false === 0:', false === 0); // false

console.log("\n=== 2. Truthy and Falsy Values ===");
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(val => {
    if (val) {
        console.log(`Value [${val}] is truthy`);
    } else {
        console.log(`Value [${val}] is FALSY`);
    }
});

const truthyExamples = ["0", "false", [], {}, -1];
console.log("\nTesting non-empty strings, empty array [], object {}:");
truthyExamples.forEach(val => {
    if (val) {
        console.log(`Value [${JSON.stringify(val)}] is TRUTHY`);
    }
});

console.log("\n=== 3. Type Coercion Wonders ===");
console.log('"10" + 5:', "10" + 5);     // "105" (string concatenation)
console.log('"10" - 5:', "10" - 5);     // 5 (numeric subtraction)
console.log('[] + {}:', [] + {});         // "[object Object]"
console.log('true + true:', true + true); // 2

console.log("\n=== 4. The 'this' Keyword Behavior ===");
const robotUnit = {
    unitId: "RX-709",
    batteryLevel: 95,
    // Regular function method: 'this' refers to robotUnit
    reportStatus: function() {
        console.log(`Regular method -> Unit: ${this.unitId}, Battery: ${this.batteryLevel}%`);
    },
    // Arrow function method: 'this' comes from outer lexical scope (not robotUnit)
    reportStatusArrow: () => {
        console.log(`Arrow method -> Unit: ${this ? this.unitId : undefined}`);
    }
};

robotUnit.reportStatus();
robotUnit.reportStatusArrow();
