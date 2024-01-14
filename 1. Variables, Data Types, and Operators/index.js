/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// DONE 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
var myVar = "Hello World!";
console.log(myVar);

// DONE 1.2 Use the let keyword to define a variable.
let myLet = "Hello World 2!";
console.log(myLet);

// DONE 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const myConst = "Hello World 3!";
console.log(myConst);

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var variables are function-scoped, meaning that they are only usable within the function that you used it in.
// let variables are block-scoped, meaning they are only usable within the block that they are used in {}.
// const variables are also block-scoped, and their values cannot be changed or reassigned after they have been initialized.

// DONE 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
const x = 1 + 2 * 4;
const y = 2 * 3 + 1;
console.log(x, y);

// Checkpoint 1.2 What operators did you use?
// Answer: I used the addition (+) and multiplication (*) operators which adds and multiplies the respective integeres.

// DONE 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
console.log("my" + "string");
console.log("my","second","string");

// Checkpoint 1.3 What operators did you use?
// Answer: I used the (+) operator which concatenates the strings together, that resulted in "mystring". And the other operator I used is
// comma, which adds a space between the strings, which results in "my second string"

// DONE 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
const log1 = true || true;
const log2 = true || false;
const log3 = false || false;
const log4 = true && true;
const log5 = true && false;
const log6 = false && false;
console.log(log1, log2, log3, log4, log5, log6);

// Checkpoint 1.4 What operators did you use?
// Answer: I used the or (||) and and (&&) operator, the or operator returns a TRUE value only if BOTH statements are NOT FALSE. 
// While the and operator returns a TRUE value if and only if both statements are TRUE.


// DONE 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const trees = ["oak", "birch", "spruce", "acacia", "jungle"]
console.log(2 in trees, "dark oak" in trees);




// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] == false evaluates to true. This happens because on the left side, the empty array get converted to a "0" because it is empty
// and 0 means false. While on the right side, false just gets converted to 0 and so its checking if 0 is equal to 0 which is true.
console.log([] == false);