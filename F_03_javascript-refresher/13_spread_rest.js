// 13_spread_rest.js - Spread Operator and Rest Parameters
// Scenario: Fleet Cargo & Tactical Weapon Merging System

// 1. Array Spread Operator (Cloning and Merging)
const vanguardFrigates = ["Aegis-1", "Valkyrie-4"];
const dreadnoughts = ["Leviathan-X", "Titan-Master"];

// Merging arrays with spread
const combinedFleet = ["Command Carrier", ...vanguardFrigates, ...dreadnoughts, "Scout-Alpha"];
console.log("=== Combined Fleet Array Spread ===");
console.log(combinedFleet);

// 2. Object Spread Operator (Merging and Overriding properties)
const baseShipConfig = {
    class: "Cruiser",
    shields: 1000,
    hyperdrive: "Tier-2",
    weapons: "Pulse Lasers"
};

const tacticalUpgrades = {
    shields: 1500, // Overrides base shield
    hyperdrive: "Quantum Jump v3", // Overrides hyperdrive
    stealthCloak: true // New property added
};

const upgradedShip = {
    ...baseShipConfig,
    ...tacticalUpgrades,
    callsign: "Nebula Sentinel"
};

console.log("\n=== Object Spread Merging ===");
console.log(upgradedShip);

// 3. Rest Parameters in Functions (Handling variable arguments)
function calculateTotalPayload(shipName, ...cargoTonnages) {
    const totalWeight = cargoTonnages.reduce((sum, weight) => sum + weight, 0);
    return `Ship [${shipName}] total cargo tonnage: ${totalWeight} tons (${cargoTonnages.length} pods loaded).`;
}

console.log("\n=== Rest Parameter Function ===");
console.log(calculateTotalPayload("Odyssey Freighter", 120, 450, 310, 85));
console.log(calculateTotalPayload("Scout Ship", 45));
