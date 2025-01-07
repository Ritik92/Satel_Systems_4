// Beginner's Guide to Understanding Objects in JavaScript

// 1. What is an Object?
// In JavaScript, an object is a collection of key-value pairs. 
// Keys are also called properties, and they describe the object.
// Values can be anything: strings, numbers, arrays, functions, or even other objects.

// Example of an Object:
const person = {
    name: "John",       // Key: 'name', Value: 'John'
    age: 30,            // Key: 'age', Value: 30
    isStudent: false    // Key: 'isStudent', Value: false
};

console.log(person); // Outputs the entire object

// 2. Accessing Object Properties
// You can access properties using dot notation or bracket notation.
console.log(person.name);        // Output: John
console.log(person["age"]);    // Output: 30

// 3. Adding or Modifying Properties
// You can add new properties or modify existing ones.
person.hobby = "Reading"; // Adds a new property 'hobby'
console.log(person.hobby); // Output: Reading

person.age = 31; // Modifies the 'age' property
console.log(person.age);  // Output: 31

// 4. Deleting Properties
// Use the 'delete' keyword to remove a property.
delete person.isStudent;
console.log(person.isStudent); // Output: undefined

// 5. Looping Through an Object
// Use a 'for...in' loop to iterate over the keys in an object.
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Outputs each key-value pair
}

// 6. Nested Objects
// Objects can contain other objects as properties.
const user = {
    id: 101,
    profile: {
        firstName: "Jane",
        lastName: "Doe"
    }
};
console.log(user.profile.firstName); // Output: Jane

// 7. Objects vs. Arrays
// Arrays are a type of object optimized for storing ordered collections of data.
// Use objects when you need to group related data with named keys.