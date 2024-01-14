/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// DONE 2.1 Display "more than fifty" if randomNumber is more than fify
if (randomNumber > 50) {
    console.log("More than fifty");
}

// DONE 2.2 Display whether the random number is odd or even
if (randomNumber % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

// DONE 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    console.log("fizzbuzz");
}
else if (randomNumber % 3 == 0) {
    console.log("fizz");
}
else if (randomNumber % 5 == 0) {
    console.log("buzz");
}
else {
    console.log(randomNumber);
}

let toDisplay = randomNumber % 2 == 0 ? "even" : "odd";
// DONE 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: switch case statements are used for when there are multiple answers that would trigger events, example would be a menu,
// where the display would change depending on the user's choice.

// DONE 2.5 Use a for loop to print the numbers 1 to N
const n = 10
for (i=1; i != n+1; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// DONE 2.6 Use a while loop to display all the values in the list
let num = 0;
while (num < list.length) {
    console.log(list[num]);
    num++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The main difference between them is when the code will be done, in do while, the code under "do" will happen first
// before it continues the loop. While in while loop, it will check the while loop first before continuing the loop.

// DONE 2.7 Use a for of loop to display all the values in the list
for (i = 0; i < list.length; i++) {
    console.log(list[i]);
}

// DONE 2.8 Use a for in loop to display all the values in the list
let index = 0;
for (let x in list) {
    console.log(list[index]);
    index++
}

// DONE 2.9 Use the for each method of the list to display all its values 
list.forEach(function(fruit) {
    console.log(fruit);
})



// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: For of can be used for iterable objects like lists, arrays, and for when you want to specify the amount of times it loops.
// for in for iterating over object properties .
// foreach for arrays, as it concisely and expressively iterates the elements.

// DONE 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
}
catch (error) {
    console.error("Error:",error.message);
}
finally {
    console.log("Cleaning up resources");
}

