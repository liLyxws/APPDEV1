// 16_modules_import.js - Module Import Demonstration
// Scenario: Interstellar Journey Duration Calculator consuming 15_modules_export.js

// Importing exported constants and functions from 15_modules_export.js
const {
    SPEED_OF_LIGHT_KM_S,
    LIGHT_YEAR_IN_KM,
    convertLightYearsToKm,
    calculateTravelTimeYears
} = require("./15_modules_export.js");

console.log("=== Interstellar Mission Calculation ===");
console.log("Constant Imported - Speed of Light:", SPEED_OF_LIGHT_KM_S, "km/s");

// Target System: Proxima Centauri (4.246 Light Years away)
const targetDistanceLY = 4.246;
const distanceKm = convertLightYearsToKm(targetDistanceLY);

console.log(`Target: Proxima Centauri (${targetDistanceLY} light years away)`);
console.log(`Total Distance: ${distanceKm.toExponential(4)} km`);

// Probe Craft Speed: 0.1c (10% of light speed)
const probeSpeedKmS = SPEED_OF_LIGHT_KM_S * 0.1;
const travelDuration = calculateTravelTimeYears(distanceKm, probeSpeedKmS);

console.log(`\nProbe Speed (10% light speed): ${probeSpeedKmS.toFixed(0)} km/s`);
console.log(`Estimated Transit Time: ${travelDuration.toFixed(2)} years.`);
