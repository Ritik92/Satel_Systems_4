// LOOPS IN JAVASCRIPT

// 1. FOR LOOP
// Use this when you know exactly how many times you want to repeat the code.
console.log("For Loop Example:");
for (let i = 0; i < 5; i++) {
    // Starts at i = 0, runs until i < 5, increases i by 1 after each iteration
    console.log("Iteration number:", i); // Outputs: 0, 1, 2, 3, 4
}
console.log(""); // Empty line for readability

// 2. WHILE LOOP
// Use this when you don't know how many times to loop, but it depends on a condition.
console.log("While Loop Example:");
let count = 0; // Initialize the counter
while (count < 3) {
    // Loop runs as long as count is less than 3
    console.log("Count is:", count); // Outputs: 0, 1, 2
    count++; // Increase the counter
}
console.log(""); // Empty line for readability

// 3. DO...WHILE LOOP
// This loop always executes at least once, even if the condition is false.
console.log("Do...While Loop Example:");
let num = 0;
do {
    console.log("Number is:", num); // Outputs: 0, 1, 2
    num++; // Increase the counter
} while (num < 3); // Loop continues while num is less than 3
console.log(""); // Empty line for readability

// 4. FOR...IN LOOP
// Use this to loop through the properties (keys) of an object or the indices of an array.
console.log("For...In Loop Example:");
const student = { name: "John", age: 20, grade: "A" };
for (let key in student) {
    // Loops through each key in the object
    console.log(`${key}: ${student[key]}`); // Outputs: name: John, age: 20, grade: A
}
console.log(""); // Empty line for readability

// 5. FOR...OF LOOP
// Use this to loop through the values of an iterable like an array or a string.
console.log("For...Of Loop Example:");
const colors = ["red", "green", "blue"];
for (let key of colors) {
    // Loops through each value in the array
    console.log(key); // Outputs: red, green, blue
}

// You can also use it with strings
console.log("For...Of Loop with String:");
for (let key of "hello") {
    console.log(key); // Outputs: h, e, l, l, o
}
console.log(""); // Empty line for readability

// 6. INFINITE LOOP
// Be careful with these! They run forever unless you manually stop them.
console.log("Infinite Loop Example (with break):");
let i = 0;
while (true) { // This condition is always true
    console.log("i is:", i); // Outputs 0, 1, 2, 3...
    if (i === 3) break; // Stops the loop when i is 3
    i++;
}
console.log(""); // Empty line for readability

// 7. BREAK STATEMENT
// Use `break` to exit a loop early.
console.log("Break Example:");
for (let j = 0; j < 5; j++) {
    if (j === 3) break; // Exit the loop when j is 3
    console.log(j); // Outputs: 0, 1, 2
}
console.log(""); // Empty line for readability

// 8. CONTINUE STATEMENT
// Use `continue` to skip the current iteration and move to the next one.
console.log("Continue Example:");
for (let k = 0; k < 5; k++) {
    if (k === 2) continue; // Skip when k is 2
    console.log(k); // Outputs: 0, 1, 3, 4
}
console.log(""); // Empty line for readability

// 9. NESTED LOOPS
// Loops inside other loops are called nested loops.
console.log("Nested Loop Example:");
for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 3; y++) {
        console.log(`x: ${x}, y: ${y}`);
    }
}
// Outputs combinations of x and y:
// x: 0, y: 0
// x: 0, y: 1
// x: 0, y: 2
// x: 1, y: 0
// x: 1, y: 1
// x: 1, y: 2
