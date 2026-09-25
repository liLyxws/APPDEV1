// 15_modules_export.js - Module Exports Demonstration
// Scenario: Astrophysics Constants and Light-Speed Utility Module

// Constants to export
const SPEED_OF_LIGHT_KM_S = 299792;
const PARSEC_IN_KM = 3.0857e13;
const LIGHT_YEAR_IN_KM = 9.4607e12;

// Utility functions to export
function convertLightYearsToKm(lightYears) {
    return lightYears * LIGHT_YEAR_IN_KM;
}

function calculateTravelTimeYears(distanceKm, speedKmS) {
    const totalSeconds = distanceKm / speedKmS;
    const secondsInYear = 365.25 * 24 * 3600;
    return totalSeconds / secondsInYear;
}

// CommonJS Exports (compatible with default Node.js environment)
module.exports = {
    SPEED_OF_LIGHT_KM_S,
    PARSEC_IN_KM,
    LIGHT_YEAR_IN_KM,
    convertLightYearsToKm,
    calculateTravelTimeYears
};

// Self-test execution when run directly
if (require.main === module) {
    console.log("=== 15_modules_export.js Module Loaded Directly ===");
    console.log("Speed of light:", SPEED_OF_LIGHT_KM_S, "km/s");
    console.log("1 Light Year =", convertLightYearsToKm(1).toExponential(3), "km");
}
