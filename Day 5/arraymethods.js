// Basic Array Methods in JavaScript with Explanations and Examples

// 1. push() - Adds one or more elements to the end of an array and returns the new length.
const arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// 2. pop() - Removes the last element from an array and returns it.
const lastElement = arr1.pop();
console.log(lastElement); // Output: 5
console.log(arr1); // Output: [1, 2, 3, 4]

// 3. shift() - Removes the first element from an array and returns it.
const firstElement = arr1.shift();
console.log(firstElement); // Output: 1
console.log(arr1); // Output: [2, 3, 4]

// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length.
arr1.unshift(0);
console.log(arr1); // Output: [0, 2, 3, 4]

// 5. concat() - Merges two or more arrays into a new array.
const arr2 = [5, 6];
const mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [0, 2, 3, 4, 5, 6]

// 6. slice() - Returns a shallow copy of a portion of an array (does not modify the original array).
const slicedArray = mergedArray.slice(1, 4); // Start index (inclusive), End index (exclusive)
console.log(slicedArray); // Output: [2, 3, 4]

// 7. splice() - Adds, removes, or replaces elements in an array.

// Example 1: Removing elements
const fruits = ['apple', 'banana', 'cherry', 'date'];
// Remove 2 elements starting at index 1 ('banana' and 'cherry')
const removedFruits = fruits.splice(1, 2);
console.log(fruits); // ['apple', 'date']
console.log(removedFruits); // ['banana', 'cherry']

// Explanation:
// - splice(1, 2) starts at index 1 and removes 2 elements.
// - The method returns the removed elements as an array.

// Example 2: Adding elements
const vegetables = ['carrot', 'spinach'];
// Add 'broccoli' at index 1 without removing any elements
vegetables.splice(1, 0, 'broccoli');
console.log(vegetables); // ['carrot', 'broccoli', 'spinach']

// Explanation:
// - splice(1, 0, 'broccoli') starts at index 1, removes 0 elements, and inserts 'broccoli'.

// Example 3: Replacing elements
const animals = ['dog', 'cat', 'rabbit'];
// Replace 'cat' (index 1) with 'parrot'
animals.splice(1, 1, 'parrot');
console.log(animals); // ['dog', 'parrot', 'rabbit']

// Explanation:
// - splice(1, 1, 'parrot') removes 1 element at index 1 ('cat') and adds 'parrot' at the same position.

// Example 4: Using negative index
const numbers = [1, 2, 3, 4, 5];
// Start removing from the second-to-last position, remove 1 element
const removedNumbers = numbers.splice(-2, 1);
console.log(numbers); // [1, 2, 3, 5]
console.log(removedNumbers); // [4]

// Explanation:
// - A negative index starts counting from the end of the array.
// - splice(-2, 1) removes 1 element starting from the second-to-last position.

// Example 5: Removing all elements from an index
const colors = ['red', 'green', 'blue', 'yellow'];
// Remove all elements starting from index 2
const removedColors = colors.splice(2);
console.log(colors); // ['red', 'green']
console.log(removedColors); // ['blue', 'yellow']

// Explanation:
// - splice(2) removes all elements from index 2 to the end of the array.

// Key Points:
// 1. splice() modifies the original array directly.
// 2. It can add, remove, or replace elements.
// 3. Returns an array containing the removed elements (if any).
// 4. Use negative indexes to start from the end of the array.

// Common Use Cases:
// - Removing specific elements.
// - Inserting new elements at a specific position.
// - Replacing existing elements.


// 8. indexOf() - Finds the first index of a specified element (-1 if not found).
console.log(arr3.indexOf(99)); // Output: 2
console.log(arr3.indexOf(10)); // Output: -1

// 9. includes() - Checks if an array contains a specified element (returns true/false).
console.log(arr3.includes(4)); // Output: true
console.log(arr3.includes(10)); // Output: false


// 10. forEach() - Executes a provided function once for each array element.
arr3=[1,2,99,4,5]


arr3.forEach((item, index) => {
  console.log(`Item: ${item}, Index: ${index}`);
});
// Output: Item: 1, Index: 0
//         Item: 2, Index: 1
//         Item: 99, Index: 2
//         Item: 4, Index: 3
//         Item: 5, Index: 4


// Output: [1, 2, 99, 4, 5]
// 11. map() - Creates a new array by applying a function to each element.
const squaredArray = arr3.map(num => num * num); 
console.log(squaredArray); // Output: [1, 4, 9801, 16, 25]

// 12. filter() - Creates a new array with elements that pass a test.
// Output: [1, 2, 99, 4, 5]
const filteredArray = arr3.filter(num => num > 2);
console.log(filteredArray); // Output: [99, 4, 5]

// 13. reduce() - To be studied later

// 14. find() - Returns the first element that satisfies a test.
const foundItem = arr3.find(num => num > 3);
console.log(foundItem); // Output: 99

// 15. findIndex() - Returns the index of the first element that satisfies a test.
const foundIndex = arr3.findIndex(num => num > 3);
console.log(foundIndex); // Output: 2

// 16. sort() - Sorts an array in place (default is ascending order for strings).
const arr4 = [3, 1, 4, 1, 5, 9];
arr4.sort();
console.log(arr4); // Output: [1, 1, 3, 4, 5, 9]

// 17. reverse() - Reverses the elements of an array in place.
arr4.reverse();
console.log(arr4); // Output: [9, 5, 4, 3, 1, 1]

// 18. join() - Joins all elements of an array into a string with a separator.
const joinedString = arr4.join("-");
console.log(joinedString); // Output: 9-5-4-3-1-1

// 19. split() - Splits a string into an array (used on strings, not arrays).
const str = "a,b,c";
const splitArray = str.split(",");
console.log(splitArray); // Output: ["a", "b", "c"]

// These array methods are fundamental tools for working with arrays in JavaScript!