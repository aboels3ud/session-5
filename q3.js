// ===== Session 05 - Exercise 3 =====
// Loops: for, while, for...of

// for loop
console.log("--- for loop ---");
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// while loop
console.log("\n--- while loop ---");
let count = 10;
while (count > 0) {
  console.log("Countdown:", count);
  count -= 3;
}

// for...of with array
const fruits = ["Apple", "Banana", "Mango", "Grape"];
console.log("\n--- for...of loop ---");
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}
