/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// DONE 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
function greet(name) {
    console.log("Hello, " + name + "! Welcome to the conversation.");
}
greet("luis");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: Function declarations can be used anywhere in the code, so they can be used before they are even declared in the order.
// While function expressions should be declared first before they are able to be used.

// DONE 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
const calculateArea = function(length, width) {
    return length * width;
};
  
const length = 5;
const width = 10;
const area = calculateArea(length, width);
  
console.log("Area:", area);
  

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function is used as an argument of anothe function and executed after a completion of certain tasks
// an example of this that I found is when having asynchronous events and/or making api requests.

// DONE 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
function modifyArray(arr, func) {
    return arr.map(func);
}

const numbers = [1, 2, 3, 4, 5];

const increment = function(number) {
    return number + 1;
}

const modifyNum = modifyArray(numbers, increment);

console.log(numbers);
console.log(modifyNum);

// DONE 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
import { sum, piaprox } from './mathUtils.js'

console.log(piaprox);

// DONE 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
import isPalindrome from './isPalindrome.js';

const testWord = "racecar";
console.log(`${testWord} is a palindrome: ${isPalindrome(testWord)}`);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: the require function and module.exports variable are alternatives to 'import' and 'export'.
// The usage depends on if you're using the CommonJS module system or ECMAScript modules.
// Though I have read that its generally recommended to use 'import' and 'export' because they are most likely compatible with modern development.
