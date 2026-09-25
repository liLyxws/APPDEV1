// 06_control_structures.js - Control Structures
// Scenario: Autonomous Security Drone Flight Validator

const droneBattery = 65; // percentage
const altitudeMeters = 120;
const weatherCondition = "CLEAR"; // "CLEAR", "RAINY", "STORM"
const threatLevel = "LEVEL_2";

console.log("=== 1. Conditional Logic (if / else if / else) ===");
if (weatherCondition === "STORM") {
    console.log("ALERT: Flight aborted due to severe storm conditions!");
} else if (droneBattery < 20) {
    console.log("WARNING: Battery critical! Returning to charging dock.");
} else if (altitudeMeters > 150) {
    console.log("ALERT: Altitude ceiling exceeded! Descend immediately.");
} else {
    console.log("Flight parameters green: Drone authorized for patrol.");
}

console.log("\n=== 2. Switch Statement (Threat Level Response) ===");
switch (threatLevel) {
    case "LEVEL_0":
        console.log("Status: Idle Surveillance Mode.");
        break;
    case "LEVEL_1":
        console.log("Status: Active Perimeter Scan.");
        break;
    case "LEVEL_2":
        console.log("Status: Deploy Recon Spotlights & Alert Control Tower.");
        break;
    case "LEVEL_3":
        console.log("Status: Lockdown Grid & Request Ground Units.");
        break;
    default:
        console.log("Status: Unknown threat code. Standing by.");
}

console.log("\n=== 3. Loops (for, while, for...of) ===");
// Standard for loop: Sensor Diagnostics
console.log("Running Sensor Diagnostic Check:");
for (let i = 1; i <= 3; i++) {
    console.log(`  - Checking Sensor #${i}... OK`);
}

// While loop: Battery charge simulation
let chargeProgress = 85;
console.log("Simulating Rapid Charging:");
while (chargeProgress < 100) {
    chargeProgress += 5;
    console.log(`  - Charging: ${chargeProgress}%`);
}

// for...of loop: Waypoint iteration
const patrolWaypoints = ["North Gate", "East Hangar", "Solar Farm", "Main Entrance"];
console.log("Patrol Route Sequence:");
for (const waypoint of patrolWaypoints) {
    console.log(`  -> Navigating to ${waypoint}`);
}
