// 12_destructuring.js - Destructuring Objects and Arrays
// Scenario: Quantum Compute Node Telemetry Extractor

const supercomputerSpec = {
    clusterName: "Titan-Quantum-9",
    activeNodes: 128,
    architecture: {
        cpuType: "Quantum-Core-v4",
        clockGHz: 4.8,
        memory: { ramTB: 64, cacheGB: 512 }
    },
    status: "OPTIMAL",
    maintainer: "Dr. Aris Thorne"
};

// 1. Basic Object Destructuring with Aliasing & Default Value
const { clusterName: name, activeNodes, status, region = "US-East-Primary" } = supercomputerSpec;
console.log("=== Object Destructuring ===");
console.log(`Cluster: ${name} (${activeNodes} nodes) | Status: ${status} | Region: ${region}`);

// 2. Nested Object Destructuring
const { architecture: { cpuType, memory: { ramTB } } } = supercomputerSpec;
console.log(`Processor: ${cpuType} with ${ramTB} TB RAM`);

// 3. Destructuring inside Function Parameters
function printMaintainerNotice({ clusterName, maintainer, status }) {
    console.log(`[ALERT] Cluster ${clusterName} maintainer: ${maintainer}. Status: ${status}`);
}
console.log("\n=== Function Parameter Destructuring ===");
printMaintainerNotice(supercomputerSpec);

// 4. Array Destructuring
const topBenchmarkScores = [98.5, 94.2, 91.0, 88.7, 85.3];

// Extract first two, skip third, gather remaining in rest array
const [goldScore, silverScore, , ...otherScores] = topBenchmarkScores;
console.log("\n=== Array Destructuring ===");
console.log("Gold Score:", goldScore);
console.log("Silver Score:", silverScore);
console.log("Other Scores:", otherScores);
