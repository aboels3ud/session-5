// ===== Session 05 - Exercise 2 =====
// Arrays - creation, access, methods

let skills = ["HTML", "CSS", "JavaScript", "Git"];

// Access
console.log("First skill:", skills[0]);
console.log("Last skill:", skills[skills.length - 1]);

// Add and remove
skills.push("React");           // add to end
skills.unshift("VS Code");      // add to beginning
console.log("After push/unshift:", skills);

skills.pop();                   // remove from end
console.log("After pop:", skills);

// Loop
console.log("\n--- All Skills ---");
skills.forEach(function (skill, index) {
  console.log(`${index + 1}. ${skill}`);
});

// Filter
let jsRelated = skills.filter(function (skill) {
  return skill === "JavaScript" || skill === "React";
});
console.log("\nJS Related:", jsRelated);
