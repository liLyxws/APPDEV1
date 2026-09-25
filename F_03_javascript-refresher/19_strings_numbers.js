// 19_strings_numbers.js - String and Number Methods
// Scenario: Environmental Sensor Data Parser & Normalizer

// 1. String Manipulation Methods
const rawSensorPayload = "  STATION_ID: NORDIC-09 | TEMP: 24.875C | HUM: 68.4% | STATUS: ACTIVE_OK  ";

console.log("=== 1. String Manipulation ===");
const trimmedData = rawSensorPayload.trim();
console.log("Trimmed:", `"${trimmedData}"`);

console.log("Uppercase:", trimmedData.toUpperCase());
console.log("Contains 'TEMP':", trimmedData.includes("TEMP"));

// Splitting string into data components
const dataParts = trimmedData.split(" | ");
console.log("Splitted Components:", dataParts);

// Replacing string content
const formattedStation = dataParts[0].replace("STATION_ID:", "Station #");
console.log("Replaced String:", formattedStation);

// Slicing substrings
const tempSubstring = dataParts[1].slice(6, 12); // Extracts "24.875"
console.log("Sliced Temp String:", tempSubstring);

// 2. Number Conversion & Math Methods
console.log("\n=== 2. Numbers and Math Operations ===");

// Parsing numbers from strings
const tempFloat = parseFloat(tempSubstring);
const humidityInt = parseInt(dataParts[2].slice(5)); // Extracts 68

console.log("Parsed Float Temp:", tempFloat, typeof tempFloat);
console.log("Parsed Int Humidity:", humidityInt, typeof humidityInt);

// Number formatting & Math rounding
console.log("Temp to 1 decimal place (toFixed):", tempFloat.toFixed(1));
console.log("Math.floor(Temp):", Math.floor(tempFloat));
console.log("Math.ceil(Temp):", Math.ceil(tempFloat));
console.log("Math.round(Temp):", Math.round(tempFloat));

// Math.random simulation: Random Sensor Noise (-0.5 to +0.5)
const randomNoise = (Math.random() - 0.5).toFixed(3);
console.log("Simulated Sensor Noise (Math.random):", randomNoise);
