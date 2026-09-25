// 10_let_const.js - Variable Scoping with let and const

// 1. const prevents re-assignment of the variable reference
const accountId = "ACC-883921";
console.log("Account ID (const):", accountId);

try {
    // Attempting re-assignment will throw a TypeError
    // accountId = "ACC-900000";
} catch (err) {
    console.log("Caught expected error when reassigning const:", err.message);
}

// 2. const objects/arrays CAN have their properties mutated
const vaultMetadata = {
    tier: "Platinum",
    depositLimit: 500000
};
vaultMetadata.tier = "Diamond"; // Allowed mutation!
vaultMetadata.securityCode = "SEC-9090"; // Allowed property addition!
console.log("\nMutated const object:", vaultMetadata);

const activeCurrencies = ["USD", "EUR", "JPY"];
activeCurrencies.push("GBP"); // Allowed array mutation!
console.log("Mutated const array:", activeCurrencies);

// 3. Block Scope demonstration: let vs var inside if-blocks
let userTier = "VIP";
if (true) {
    let userTier = "SuperVIP"; // Scoped inside this block only
    var legacySystemId = "SYS-V1"; // Leaks out of block scope
    console.log("\nInside block -> userTier (let):", userTier);
}
console.log("Outside block -> userTier (let):", userTier); // Original value unchanged
console.log("Outside block -> legacySystemId (var leaked):", legacySystemId);

// 4. Loop scope with let
console.log("\nLooping with let creates a new binding per iteration:");
for (let i = 1; i <= 3; i++) {
    console.log(`  - Iteration #${i}`);
}
