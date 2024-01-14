/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// DONE 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const numsquares = numbers.map(number => number ** 2);
console.log(numsquares);

// DONE 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNums = numbers.filter(number => number % 2 === 0);
console.log(evenNums);

// DONE 5.3 Use the reduce method to find the sum of all numbers in the array
const numSums = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numSums);

// DONE 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const wordsUpper = words.map(word => word.toUpperCase());
console.log(wordsUpper);

// DONE 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = words.filter(word => word.length>4);
console.log(longWords);

// DONE 5.6 Use the reduce method to concatenate all words in the array into a single string
const combinedWords = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(combinedWords);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: map is used for when you want something modified to all elements of an array and display it as a new array
// filter is used for reducing the elements within the array by filtering them under conditions
// and reduce is used for reducing the elements to a single element depending on function used.