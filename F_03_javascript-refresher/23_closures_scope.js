// 23_closures_scope.js - Closures and Lexical Scope
// Scenario: Encapsulated Energy Vault State Generator

// 1. Lexical Scope Demonstration
const globalEnvironmentName = "Quantum-Grid-Alpha";

function outerScopeFunction() {
    const outerVariable = "Core Power Online";
    
    function innerScopeFunction() {
        // Accesses variables from its own scope, outer function scope, and global scope
        console.log(`[LEXICAL SCOPE] Global: ${globalEnvironmentName} | Outer: ${outerVariable}`);
    }
    
    innerScopeFunction();
}

console.log("=== 1. Lexical Scope Test ===");
outerScopeFunction();

// 2. Closure Demonstration (State Encapsulation / Private Variables)
function createEnergyVault(vaultId, initialCapacityMw) {
    // Private state hidden inside closure
    let storedEnergyMw = initialCapacityMw;
    let transactionHistory = [];

    return {
        // Returns an object containing inner functions that close over 'storedEnergyMw' & 'transactionHistory'
        getVaultStatus() {
            return `Vault [${vaultId}] Energy Reserve: ${storedEnergyMw} MW`;
        },
        chargeVault(amountMw) {
            storedEnergyMw += amountMw;
            transactionHistory.push(`+${amountMw} MW stored`);
            console.log(`Charged ${amountMw} MW into Vault ${vaultId}. Current total: ${storedEnergyMw} MW.`);
        },
        dischargeVault(amountMw) {
            if (amountMw > storedEnergyMw) {
                console.log(`[ALERT] Insufficient energy reserve in Vault ${vaultId}! Requested ${amountMw} MW, available ${storedEnergyMw} MW.`);
                return false;
            }
            storedEnergyMw -= amountMw;
            transactionHistory.push(`-${amountMw} MW discharged`);
            console.log(`Discharged ${amountMw} MW from Vault ${vaultId}. Remaining: ${storedEnergyMw} MW.`);
            return true;
        },
        getHistory() {
            return [...transactionHistory]; // Returns copy of encapsulated history
        }
    };
}

console.log("\n=== 2. Closure Private State Test ===");
const vaultA = createEnergyVault("VLT-100", 500);
const vaultB = createEnergyVault("VLT-200", 1200);

console.log(vaultA.getVaultStatus());
console.log(vaultB.getVaultStatus());

vaultA.chargeVault(250);
vaultA.dischargeVault(100);
vaultA.dischargeVault(800); // Exceeds capacity test

console.log("\nVault A Final Status:", vaultA.getVaultStatus());
console.log("Vault A Transaction Log:", vaultA.getHistory());

// Confirming private state cannot be mutated directly from outside:
console.log("Direct access to private variable storedEnergyMw:", vaultA.storedEnergyMw); // undefined
