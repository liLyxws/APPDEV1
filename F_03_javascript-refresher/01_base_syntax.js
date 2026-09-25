// 01_base_syntax.js - Base Syntax Demonstration
// Scenario: Quantum Bakery Order Processing

// Single line comment: Log store welcome header
console.log("=== Welcome to Quantum Artisan Bakery ===");

/* Multi-line comment:
   Calculating the total order cost for custom sourdough 
   and matcha croissants with tax.
*/
const sourdoughPrice = 8.50;
const matchaCroissantPrice = 4.75;
const sourdoughQty = 2;
const matchaQty = 3;

// Basic Arithmetic Expressions
const subtotal = (sourdoughPrice * sourdoughQty) + (matchaCroissantPrice * matchaQty);
const salesTaxRate = 0.08; // 8% tax
const taxAmount = subtotal * salesTaxRate;
const grandTotal = subtotal + taxAmount;

// String Concatenation and Formatting
console.log("Sourdough Loaves (" + sourdoughQty + "x): $" + (sourdoughPrice * sourdoughQty).toFixed(2));
console.log("Matcha Croissants (" + matchaQty + "x): $" + (matchaCroissantPrice * matchaQty).toFixed(2));
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax (8%): $" + taxAmount.toFixed(2));
console.log("Grand Total: $" + grandTotal.toFixed(2));
