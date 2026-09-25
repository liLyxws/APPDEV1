// 11_arrow_functions.js - Arrow Function Syntaxes and Lexical Scope
// Scenario: Aerospace Rocket Motor Diagnostic Suite

// 1. Standard function vs Arrow function syntax
const calculateThrustStandard = function(massFlowRate, exhaustVelocity) {
    return massFlowRate * exhaustVelocity;
};

// Arrow function with block body and explicit return
const calculateThrustArrow = (massFlowRate, exhaustVelocity) => {
    return massFlowRate * exhaustVelocity;
};

// 2. Concise arrow function with implicit return
const calculateSpecificImpulse = (thrustForce, weightFlowRate) => thrustForce / weightFlowRate;

// 3. Single parameter arrow function (omitting parentheses)
const convertKgToLbs = kg => kg * 2.20462;

// 4. Returning an Object Literal implicitly (wrapped in parentheses)
const createEngineTelemetry = (engineId, status, thrustKw) => ({
    timestamp: new Date().toISOString(),
    engineId,
    status,
    thrustKw,
    isOperational: status === "NOMINAL"
});

// Testing arrow functions
console.log("=== Thrust Calculation ===");
console.log("Standard Function Thrust:", calculateThrustStandard(150, 2400), "N");
console.log("Arrow Function Thrust:", calculateThrustArrow(150, 2400), "N");

console.log("\n=== Concise Arrow Functions ===");
console.log("Specific Impulse (Isp):", calculateSpecificImpulse(360000, 1170).toFixed(1), "s");
console.log("1500 kg converted to lbs:", convertKgToLbs(1500).toFixed(2), "lbs");

console.log("\n=== Object Implicit Return ===");
const engineReport = createEngineTelemetry("Merlin-1D-Alpha", "NOMINAL", 845);
console.log(engineReport);
