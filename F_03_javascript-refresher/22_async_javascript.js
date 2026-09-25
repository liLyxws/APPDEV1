// 22_async_javascript.js - Asynchronous JavaScript: Promises & Async/Await
// Scenario: Satellite Data Uplink and Sensor Querying

// 1. Simulating an Asynchronous Request returning a Promise
function fetchSatelliteData(satelliteId) {
    return new Promise((resolve, reject) => {
        console.log(`[UPLINK INITIALIZED] Connecting to Satellite #${satelliteId}...`);
        
        setTimeout(() => {
            if (satelliteId === "SAT-ERR") {
                reject(new Error(`Failed to establish handshake with Satellite #${satelliteId}. Connection timed out.`));
            } else {
                resolve({
                    id: satelliteId,
                    telemetry: "NOMINAL",
                    signalStrengthDbm: -68.4,
                    dataPayload: ["Solar_Array_100%", "Orbit_350km", "Thermal_Shield_OK"]
                });
            }
        }, 300); // 300ms simulated latency
    });
}

// 2. Consuming Promises with .then() and .catch()
console.log("=== 1. Promise Chaining (.then / .catch) ===");
fetchSatelliteData("SAT-ALPHA-1")
    .then(data => {
        console.log(`[THEN RECEIVED] Signal: ${data.signalStrengthDbm} dBm | Telemetry: ${data.telemetry}`);
    })
    .catch(err => {
        console.error(`[THEN ERROR] ${err.message}`);
    });

// 3. Consuming Promises with Async / Await & Try / Catch
async function runMissionDiagnostics() {
    console.log("\n=== 2. Async/Await Sequential Diagnostics ===");
    try {
        console.log("Fetching primary satellite status...");
        const sat1 = await fetchSatelliteData("SAT-BETA-2");
        console.log(`[AWAIT SUCCESS] Satellite ${sat1.id} operational payload:`, sat1.dataPayload);

        console.log("\nFetching backup satellite status...");
        const sat2 = await fetchSatelliteData("SAT-ERR"); // Will throw error
        console.log("Backup sat data:", sat2);

    } catch (error) {
        console.error(`[ASYNC CATCH] Intercepted Error: ${error.message}`);
    } finally {
        console.log("[MISSION DIAGNOSTICS COMPLETE] All satellite channels scanned.");
    }
}

// Run async function
runMissionDiagnostics();
