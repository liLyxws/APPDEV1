// 03_functions.js - Functions in JavaScript
// Scenario: Space Station Trajectory & Cargo Calculation

// 1. Function Declaration with parameters and return value
function calculateOrbitalVelocity(altitudeKm, gravityMultiplier = 1.0) {
    const earthRadiusKm = 6371;
    const totalRadius = earthRadiusKm + altitudeKm;
    const gConstant = 398600; // Standard gravitational parameter in km^3/s^2
    
    // Orbital velocity formula: v = sqrt(mu / r)
    const velocity = Math.sqrt(gConstant / totalRadius) * gravityMultiplier;
    return velocity.toFixed(2);
}

// 2. Function Expression
const calculateCargoFee = function(weightKg, priorityClass) {
    let baseRatePerKg = 12.50;
    if (priorityClass === "EXPRESS") {
        baseRatePerKg *= 1.8;
    } else if (priorityClass === "HAZMAT") {
        baseRatePerKg *= 2.5;
    }
    return weightKg * baseRatePerKg;
};

// 3. Helper Function demonstrating internal helper composition
function generateMissionReport(missionName, altitude, cargoWeight, priority) {
    const speed = calculateOrbitalVelocity(altitude);
    const fee = calculateCargoFee(cargoWeight, priority);
    
    return `[MISSION SUMMARY: ${missionName.toUpperCase()}]
- Target Altitude: ${altitude} km
- Required Orbital Speed: ${speed} km/s
- Cargo Weight: ${cargoWeight} kg (${priority} priority)
- Total Transport Fee: $${fee.toLocaleString()}`;
}

// Executing functions and printing results
console.log("=== Orbital Velocity Test ===");
console.log("ISS Orbit (408 km):", calculateOrbitalVelocity(408), "km/s");
console.log("GEO Orbit (35786 km):", calculateOrbitalVelocity(35786), "km/s");

console.log("\n=== Mission Calculations ===");
const reportA = generateMissionReport("Supply Pod Artemis", 420, 1500, "EXPRESS");
console.log(reportA);
