// 18_ternary_nullish.js - Ternary Operator, Nullish Coalescing (??), and Optional Chaining (?.)
// Scenario: Customer Order Checkout & Shipping Calculation

// 1. Ternary Operator (Inline conditional evaluation)
const orderSubtotal = 145.00;
const isVipMember = true;

// If subtotal >= 100 or VIP member, shipping is free ($0), else $15
const shippingFee = (orderSubtotal >= 100 || isVipMember) ? 0 : 15.00;
console.log("=== 1. Ternary Operator ===");
console.log(`Order Subtotal: $${orderSubtotal} | VIP Status: ${isVipMember}`);
console.log(`Shipping Fee: $${shippingFee.toFixed(2)}`);

// Nested Ternary example (Loyalty tier badge)
const loyaltyPoints = 850;
const memberTier = loyaltyPoints >= 1000 ? "Gold" : loyaltyPoints >= 500 ? "Silver" : "Bronze";
console.log(`Loyalty Points (${loyaltyPoints}) -> Member Tier: ${memberTier}`);

// 2. Nullish Coalescing Operator (??) vs Logical OR (||)
// '??' only falls back for null or undefined (preserves 0, false, and "")
const userPreferences = {
    theme: "dark",
    maxItemsPerPage: 0, // 0 is valid, not null/undefined
    customDiscountCode: null, // null, should fallback
    newsletterSubscribed: false // false is valid
};

// Logical OR (||) treats 0, "", false as falsy and replaces them:
const pageSizeWithOR = userPreferences.maxItemsPerPage || 25; // Incorrectly overrides 0 -> 25

// Nullish Coalescing (??) keeps 0:
const pageSizeWithNullish = userPreferences.maxItemsPerPage ?? 25; // Correctly keeps 0

const discountCode = userPreferences.customDiscountCode ?? "WELCOME10";

console.log("\n=== 2. Nullish Coalescing (??) vs Logical OR (||) ===");
console.log("Page Size using || (wrongly overrides 0):", pageSizeWithOR);
console.log("Page Size using ?? (correctly preserves 0):", pageSizeWithNullish);
console.log("Discount Code (null fallback):", discountCode);

// 3. Optional Chaining (?.) with Nullish Coalescing (??)
const customerRecord = {
    id: "CUST-994",
    profile: {
        address: {
            city: "Tokyo",
            zipCode: "100-0001"
        }
    }
};

const country = customerRecord?.profile?.address?.country ?? "Japan (Default)";
const buildingFloor = customerRecord?.profile?.building?.floor ?? "Ground Floor";

console.log("\n=== 3. Optional Chaining & Nullish Fallback ===");
console.log("Customer Country:", country);
console.log("Building Floor:", buildingFloor);
