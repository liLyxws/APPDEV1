// 08_essential_features.js - Essential ES6+ Features
// Scenario: Deep Space Exploration Rover Configuration

// 1. Default Parameters
function createRoverMission(missionName, targetBody = "Mars", launchYear = 2028, durationMonths = 24) {
    return {
        // 2. Shorthand Object Property Names (name instead of name: name)
        missionName,
        targetBody,
        launchYear,
        durationMonths,
        
        // 3. Method Shorthand in objects
        getSummary() {
            // 4. Template Literals with multi-line string interpolation
            return `[ROVER MISSION REGISTRY]
Name: ${this.missionName}
Destination: ${this.targetBody}
Launch Schedule: Q3 ${this.launchYear}
Planned Duration: ${this.durationMonths} Months (${(this.durationMonths / 12).toFixed(1)} Years)`;
        }
    };
}

// Testing default parameters vs custom arguments
console.log("=== 1. Default Parameters Test ===");
const defaultMission = createRoverMission("Perseverance II");
console.log(defaultMission.getSummary());

console.log("\n=== 2. Custom Arguments Test ===");
const europaMission = createRoverMission("Europa Ocean Search", "Europa (Jupiter Moon)", 2031, 48);
console.log(europaMission.getSummary());
