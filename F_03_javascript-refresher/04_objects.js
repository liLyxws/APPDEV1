// 04_objects.js - Objects in JavaScript
// Scenario: Smart Health Watch Device Profile

const smartWatch = {
    brand: "ApexPulse",
    model: "Titanium Pro 5",
    serialNumber: "AP-9902-X",
    batteryLevel: 82, // percentage
    owner: {
        firstName: "Elena",
        lastName: "Rostova",
        age: 29
    },
    metrics: {
        stepsToday: 11450,
        heartRateBpm: 72,
        caloriesBurned: 485
    },
    // Method inside object
    syncData: function() {
        return `[SYNC OK] Device ${this.serialNumber} synced for ${this.owner.firstName}. Steps: ${this.metrics.stepsToday}.`;
    },
    logWorkout: function(workoutType, durationMins, calories) {
        this.metrics.caloriesBurned += calories;
        console.log(`Workout recorded: ${workoutType} for ${durationMins} mins (+${calories} kcal).`);
    }
};

// Accessing properties via Dot Notation and Bracket Notation
console.log("=== Device Info ===");
console.log("Device Name:", smartWatch.brand, smartWatch["model"]);
console.log("Owner Name:", smartWatch.owner.firstName, smartWatch.owner["lastName"]);

// Accessing nested metrics
console.log("Heart Rate:", smartWatch.metrics.heartRateBpm, "BPM");

// Calling object methods
console.log("\n=== Sync Status ===");
console.log(smartWatch.syncData());

// Mutating object properties
console.log("\n=== Log Workout ===");
smartWatch.logWorkout("Trail Run", 45, 360);
console.log("Updated Calories Burned:", smartWatch.metrics.caloriesBurned, "kcal");
