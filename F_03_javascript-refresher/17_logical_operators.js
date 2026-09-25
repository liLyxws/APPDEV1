// 17_logical_operators.js - Logical Operators and Short-Circuit Evaluation
// Scenario: High-Security Data Center Access Authorization

const userBadgeActive = true;
const securityClearanceLevel = 4; // Required: >= 3
const biometricsVerified = true;
const isAccountFlagged = false;

// 1. Logical AND (&&): All conditions must be truthy
const canAccessServerRoom = userBadgeActive && (securityClearanceLevel >= 3) && biometricsVerified && !isAccountFlagged;
console.log("=== 1. Logical AND Access Evaluation ===");
console.log("Can Access Server Room:", canAccessServerRoom);

// 2. Logical OR (||): At least one condition must be truthy
const isMasterAdmin = false;
const hasEmergencyKeycard = true;
const canBypassLockdown = isMasterAdmin || hasEmergencyKeycard;
console.log("\n=== 2. Logical OR Bypass Evaluation ===");
console.log("Can Bypass Lockdown:", canBypassLockdown);

// 3. Logical NOT (!): Inverts boolean truthiness
console.log("\n=== 3. Logical NOT Evaluation ===");
console.log("Account Flagged Status:", isAccountFlagged);
console.log("Account Clearance Clean (!flagged):", !isAccountFlagged);

// 4. Short-Circuit Evaluation
console.log("\n=== 4. Short-Circuiting Demonstration ===");

// Short-circuiting with && (executes function ONLY IF left side is truthy)
function triggerSecurityAlarm() {
    console.log("[ALARM TRIGGERED] Unauthorized intruder detected!");
    return true;
}

const breachDetected = false;
console.log("Testing Breach Alert (breachDetected && triggerAlarm):");
const alarmStatus = breachDetected && triggerSecurityAlarm(); // triggerSecurityAlarm does NOT execute
console.log("Alarm status result:", alarmStatus);

// Short-circuiting with || (provides fallback value)
let customSessionTimeout; // undefined
const activeTimeout = customSessionTimeout || 300; // Fallback to 300 seconds default
console.log("\nDefault Session Timeout (fallback with ||):", activeTimeout, "seconds");
