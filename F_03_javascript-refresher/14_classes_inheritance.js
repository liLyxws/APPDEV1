// 14_classes_inheritance.js - ES6 Classes and Object-Oriented Inheritance
// Scenario: Electric Autonomous Vehicle Hierarchy

// Base Class: Vehicle
class Vehicle {
    constructor(id, manufacturer, batteryCapacityKWh) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.batteryCapacityKWh = batteryCapacityKWh;
        this.chargeLevel = 100; // Percentage
    }

    // Instance Method
    getSpecs() {
        return `[VEHICLE #${this.id}] Manufacturer: ${this.manufacturer} | Battery: ${this.batteryCapacityKWh} kWh (${this.chargeLevel}% full)`;
    }

    // Method to consume battery
    drive(distanceKm) {
        const consumption = distanceKm * 0.15;
        this.chargeLevel = Math.max(0, this.chargeLevel - consumption);
        console.log(`Vehicle #${this.id} traveled ${distanceKm} km. Battery now at ${this.chargeLevel.toFixed(1)}%.`);
    }

    // Static Utility Method
    static compareBattery(v1, v2) {
        if (v1.batteryCapacityKWh > v2.batteryCapacityKWh) {
            return `${v1.id} has a larger battery than ${v2.id}.`;
        }
        return `${v2.id} has a larger or equal battery compared to ${v1.id}.`;
    }
}

// Subclass: AutonomouseVTOL (Electric Vertical Takeoff and Landing aircraft)
class AutonomouseVTOL extends Vehicle {
    constructor(id, manufacturer, batteryCapacityKWh, maxAltitudeMeters, autopilotVersion) {
        // Call parent constructor using super()
        super(id, manufacturer, batteryCapacityKWh);
        this.maxAltitudeMeters = maxAltitudeMeters;
        this.autopilotVersion = autopilotVersion;
        this.isFlying = false;
    }

    // Overriding parent method & calling super method
    getSpecs() {
        return `${super.getSpecs()} | Flight Ceiling: ${this.maxAltitudeMeters}m | Autopilot: v${this.autopilotVersion}`;
    }

    takeOff() {
        if (this.chargeLevel < 20) {
            console.log(`[TAKEOFF DENIED] eVTOL #${this.id} battery too low (${this.chargeLevel}%).`);
            return;
        }
        this.isFlying = true;
        console.log(`eVTOL #${this.id} launched! Ascending to cruising altitude...`);
    }
}

// Instantiating objects and testing class functionality
console.log("=== Base Vehicle Demonstration ===");
const groundRover = new Vehicle("ROV-101", "TerraMotors", 75);
console.log(groundRover.getSpecs());
groundRover.drive(120);

console.log("\n=== Subclass Inheritance Demonstration ===");
const skyTaxi = new AutonomouseVTOL("VTOL-900", "AeroDynamics Corp", 120, 2500, "3.4.1");
console.log(skyTaxi.getSpecs());
skyTaxi.takeOff();
skyTaxi.drive(200);

console.log("\n=== Static Method Test ===");
console.log(Vehicle.compareBattery(skyTaxi, groundRover));
