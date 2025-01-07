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
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1, 99); // Removes 1 element at index 2 and adds 99
console.log(arr3); // Output: [1, 2, 99, 4, 5]

// 8. indexOf() - Finds the first index of a specified element (-1 if not found).
console.log(arr3.indexOf(99)); // Output: 2
console.log(arr3.indexOf(10)); // Output: -1

// 9. includes() - Checks if an array contains a specified element (returns true/false).
console.log(arr3.includes(4)); // Output: true
console.log(arr3.includes(10)); // Output: false

// 10. forEach() - Executes a provided function once for each array element.
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
const filteredArray = arr3.filter(num => num > 2);
console.log(filteredArray); // Output: [99, 4, 5]

// 13. reduce() - Reduces an array to a single value by applying a function.
const sum = arr3.reduce((total, num) => total + num, 0); // 0 is the initial value
console.log(sum); // Output: 111

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