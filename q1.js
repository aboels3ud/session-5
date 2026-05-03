// ===== Session 05 - Exercise 1 =====
// Variables, data types, and type conversion

// Declare variables
let name = "Ahmed";
const age = 25;
var isStudent = true;

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);

// Type conversion
let strNumber = "42";
let convertedNum = Number(strNumber);
console.log("String to Number:", convertedNum, typeof convertedNum);

let num = 100;
let convertedStr = String(num);
console.log("Number to String:", convertedStr, typeof convertedStr);

// Template literals
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
