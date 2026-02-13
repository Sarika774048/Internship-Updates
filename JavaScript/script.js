// Variables
var collegeName = "ABC Engineering College";
let studentName = "Rahul";
let semester = 4;
const courseName = "JavaScript";

console.log("----- Student Information -----");
console.log("College:", collegeName);
console.log("Name:", studentName);
console.log("Semester:", semester);
console.log("Course:", courseName);
console.log("--------------------------------");

// Data Types
let numberExample = 250;
let stringExample = "Frontend Development";
let booleanExample = false;
let nullExample = null;
let undefinedExample;

console.log("----- Data Types -----");
console.log("Type of numberExample:", typeof numberExample);
console.log("Type of stringExample:", typeof stringExample);
console.log("Type of booleanExample:", typeof booleanExample);
console.log("Type of nullExample:", typeof nullExample);
console.log("Type of undefinedExample:", typeof undefinedExample);
console.log("--------------------------------");

// Arithmetic Operators
let price = 500;
let quantity = 3;
let totalAmount = price * quantity;

console.log("----- Shopping Calculation -----");
console.log("Price per item:", price);
console.log("Quantity:", quantity);
console.log("Total Amount:", totalAmount);
console.log("--------------------------------");

// Comparison Operators
let num1 = 20;
let num2 = 15;

console.log("----- Comparison Operators -----");
console.log("num1 > num2:", num1 > num2);
console.log("num1 < num2:", num1 < num2);
console.log("num1 == num2:", num1 == num2);
console.log("num1 != num2:", num1 != num2);
console.log("--------------------------------");

// Logical Operators
let hasID = true;
let hasTicket = false;

console.log("----- Logical Operators -----");
console.log("hasID && hasTicket:", hasID && hasTicket);
console.log("hasID || hasTicket:", hasID || hasTicket);
console.log("!hasID:", !hasID);
console.log("--------------------------------");

// Type Conversion
let stringNumber = "100";
let convertedNumber = Number(stringNumber);
let finalValue = convertedNumber + 50;

console.log("----- Type Conversion -----");
console.log("Original Value:", stringNumber);
console.log("After Conversion + 50:", finalValue);
console.log("--------------------------------");

// Conditional Statements
let marks = 68;
let result;

if (marks >= 90) {
    result = "Grade A";
} else if (marks >= 75) {
    result = "Grade B";
} else if (marks >= 50) {
    result = "Grade C";
} else {
    result = "Fail";
}

console.log("----- Result Evaluation -----");
console.log("Marks:", marks);
console.log("Result:", result);
console.log("--------------------------------");

// Loop Example
console.log("----- Loop Example (Numbers 1 to 5) -----");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
console.log("--------------------------------");

// Simple Interest Calculation
let principal = 10000;
let rate = 5;
let time = 2;

let simpleInterest = (principal * rate * time) / 100;

console.log("----- Simple Interest Calculation -----");
console.log("Principal:", principal);
console.log("Rate:", rate + "%");
console.log("Time:", time + " years");
console.log("Simple Interest:", simpleInterest);
console.log("--------------------------------");

console.log("JavaScript Basics Practice Completed Successfully!");
