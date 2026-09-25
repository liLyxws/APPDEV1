// 21_errors_json.js - Error Handling & JSON Processing
// Scenario: Galactic Payment Gateway Payload Validator

function processPaymentPayload(jsonString) {
    console.log("=== Attempting Payload Processing ===");
    let parsedData = null;

    try {
        // Step 1: JSON Parsing
        parsedData = JSON.parse(jsonString);
        console.log("JSON parsed successfully. Transaction ID:", parsedData.transactionId);

        // Step 2: Custom Validation Rules
        if (!parsedData.amount || parsedData.amount <= 0) {
            throw new Error("Invalid transaction amount. Must be greater than 0.");
        }

        if (!parsedData.sender || !parsedData.receiver) {
            throw new Error("Missing mandatory sender or receiver credentials.");
        }

        // Processing success
        console.log(`[SUCCESS] Transferred ${parsedData.currency} ${parsedData.amount} from ${parsedData.sender} to ${parsedData.receiver}.`);
        
    } catch (error) {
        // Catching standard syntax errors or thrown custom validation errors
        console.error(`[ERROR CAUGHT] ${error.name}: ${error.message}`);
    } finally {
        // Executed regardless of success or exception
        console.log("[FINALLY] Audit logging completed. Connection socket closed.\n");
    }
}

// 1. Valid Payload Test (Serializing object with JSON.stringify)
const validOrder = {
    transactionId: "TXN-90812-X",
    amount: 1250.00,
    currency: "CREDITS",
    sender: "Vault_Alpha",
    receiver: "Merchant_Beta"
};

const validJson = JSON.stringify(validOrder, null, 2);
console.log("Serialized JSON Payload:\n", validJson);
processPaymentPayload(validJson);

// 2. Invalid Amount Payload Test
const invalidAmountJson = JSON.stringify({
    transactionId: "TXN-90813-Y",
    amount: -50.00,
    currency: "CREDITS",
    sender: "Vault_Alpha",
    receiver: "Merchant_Beta"
});
processPaymentPayload(invalidAmountJson);

// 3. Malformed JSON Test
const malformedJson = '{ "transactionId": "TXN-90814", "amount": 500, }'; // Trailing comma syntax error
processPaymentPayload(malformedJson);
