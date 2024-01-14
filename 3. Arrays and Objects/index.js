/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// DONE 3.1 Get the first, 5th, and last items in the numbers array.
console.log(numbers[0], numbers[4], numbers[numbers.length-1]);

// DONE 3.2 calculate the min, max, and the average of the numbers array
numbers.sort();
let numbersSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let numbersAve = numbersSum / numbers.length;
console.log(numbers[0], numbers[numbers.length-1], numbersAve);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: They function similarly, only differences would be their syntax and lists in python can hold multiple data types
// while for javascript, yes you can store different data types, its advisable to use the same one. They are both mutable. same
// iteration commands, and same syntax.

// DONE 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const it114Lcourse = {
    courseCode: "IT114L",
    name: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units: 1,
    numberofStudents: 41,
};

// DONE 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
it114Lcourse.profName = "Job Lipat";
console.log(it114Lcourse.profName);

// DONE 3.5 Declare and array of objects with information about the courses you are taking this term
const it114course = {
    courseCode: "IT114",
    name: "WEB SYSTEMS AND TECHNOLOGIES",
    units: 2,
    numberofStudents: 38,
    profName: "Mark Anthony Hernandez"
};

const it132Lcourse = {
    courseCode: "IT132L",
    name: "LOGIC DESIGN AND SWITCHING (LABORATORY)",
    units: 1,
    numberofStudents: 42,
    profName: "Leonnel De Mesa"
};

const it132course = {
    courseCode: "IT132L",
    name: "LOGIC DESIGN AND SWITCHING THEORY",
    units: 2,
    numberofStudents: 42,
    profName: "Leonnel De Mesa"
};

const it133course = {
    courseCode: "IT133",
    name: "TECHNOPRENEURSHIP",
    units: 3,
    numberofStudents: 41,
    profName: "Khristian Kikuchi"
};

const cs107Lcourse = {
    courseCode: "CS107L",
    name: "INFORMATION MANAGEMENT (LABORATORY)",
    units: 1,
    numberofStudents: 26,
    profName: "Adomar Ilao"
};

const cs107course = {
    courseCode: "CS107",
    name: "INFORMATION MANAGEMENT",
    units: 2,
    numberofStudents: 41,
    profName: "Dahlia De Mesa"
};

const hum039course = {
    courseCode: "HUM039",
    name: "ETHICS",
    units: 3,
    numberofStudents: 41,
    profName: "Rogelio Valenzuela"
};

// DONE 3.5 Calculate the total number of units you are taking this term using the array of objects.
const totalUnits = it114Lcourse.units + it114course.units + it132Lcourse.units + it132course.units + it133course.units + cs107Lcourse.units + cs107course.units + hum039course.units;
console.log(totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of javascript's objects in python is the dictionary. They serve the same purpose and syntax and content
// and the only difference they have are how the data is retrieved, modified, and manipulated depending on the programming language used.

// DONE 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
const updatedNumbers = [...numbers, 100];

// DONE 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
const { courseCode, units, ...rest } = it114Lcourse;

console.log("Course Code:", courseCode);
console.log("Units:", units);
