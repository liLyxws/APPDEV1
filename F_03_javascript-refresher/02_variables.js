// 02_variables.js - Variable Declarations and Data Types
// Scenario: Cyberpunk Netrunner Profile

// Using 'const' for values that should not be reassigned
const runnerAlias = "Valkyrie_88";
const birthYear = 2077;
const maxHealth = 100;

// Using 'let' for values that can change over time
let currentHealth = 100;
let credits = 2450.50;
let isShieldActive = true;
let primaryWeapon = "Plasma Blade";

// Legacy 'var' demonstration (function/global scope)
var bountyStatus = "Wanted Level 2";

// Undefined and Null primitives
let secondaryWeapon; // undefined
let currentMission = null; // null (no active mission)

console.log("=== Initial Netrunner Profile ===");
console.log("Alias:", runnerAlias, "| Type:", typeof runnerAlias);
console.log("Birth Year:", birthYear, "| Type:", typeof birthYear);
console.log("Shield Active:", isShieldActive, "| Type:", typeof isShieldActive);
console.log("Secondary Weapon:", secondaryWeapon, "| Type:", typeof secondaryWeapon);
console.log("Active Mission:", currentMission, "| Type:", typeof currentMission);

// Reassigning 'let' variables after combat simulation
currentHealth -= 35;
credits += 800.00;
isShieldActive = false;
currentMission = "Infiltrate Arasaka Tower";

console.log("\n=== Profile After Combat Encounter ===");
console.log("Current Health:", currentHealth, "/", maxHealth);
console.log("Updated Credits: $" + credits.toFixed(2));
console.log("Shield Active:", isShieldActive);
console.log("New Mission:", currentMission);
