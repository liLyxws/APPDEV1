// 20_array_methods.js - Functional Array Iteration Methods
// Scenario: Cyberpunk Guild Bounty Board Processor

const bountyList = [
    { id: "B-101", target: "Cyber-Jackal", payout: 4500, riskLevel: "HIGH", completed: true },
    { id: "B-102", target: "Grid-Phantom", payout: 8200, riskLevel: "EXTREME", completed: false },
    { id: "B-103", target: "Neon-Viper", payout: 2900, riskLevel: "LOW", completed: true },
    { id: "B-104", target: "Data-Ghost", payout: 12000, riskLevel: "EXTREME", completed: false },
    { id: "B-105", target: "Rust-Reaper", payout: 5100, riskLevel: "MEDIUM", completed: true }
];

console.log("=== 1. map() - Transforming Array Items ===");
// Extract list of target names with payout format
const bountySummaries = bountyList.map(b => `${b.target} ($${b.payout.toLocaleString()})`);
console.log("Target Summaries:", bountySummaries);

console.log("\n=== 2. filter() - Filtering Elements ===");
// Filter active (uncompleted) bounties with EXTREME risk
const extremeActiveBounties = bountyList.filter(b => !b.completed && b.riskLevel === "EXTREME");
console.log("Extreme Active Bounties:", extremeActiveBounties);

console.log("\n=== 3. reduce() - Aggregating Values ===");
// Calculate total earnings from all COMPLETED bounties
const totalEarnings = bountyList
    .filter(b => b.completed)
    .reduce((accum, bounty) => accum + bounty.payout, 0);
console.log(`Total Completed Bounty Payouts: $${totalEarnings.toLocaleString()}`);

console.log("\n=== 4. find() - Finding Single Target ===");
// Find first bounty paying over $10,000
const highValueBounty = bountyList.find(b => b.payout > 10000);
console.log("First >$10k Bounty Found:", highValueBounty);

console.log("\n=== 5. some() and every() - Testing Conditions ===");
const hasExtremeRisk = bountyList.some(b => b.riskLevel === "EXTREME");
const allCompleted = bountyList.every(b => b.completed);
console.log("Has EXTREME risk bounties:", hasExtremeRisk);
console.log("Are all bounties completed:", allCompleted);

console.log("\n=== 6. forEach() - Side-Effect Iteration ===");
console.log("Completed Bounty Log:");
bountyList
    .filter(b => b.completed)
    .forEach(b => console.log(`  [CLAIMED] Target: ${b.target} | Reward: $${b.payout}`));
