/* 
1. Data Types & Variables

Primitive Types
  1. Strings
  2. Numbers
  3. Boolean
  4. Undefined
  5. Null
  6. BigInt
  7. Symbol


Reference/Object Data Types 
  1. Objects
  2. Arrays
  3. Date
  4. Regular Expression (RegEx)
  5. Funtions

*/

let firstName = "Buba"

console.log(firstName)
console.log(typeof firstName)

firstName = "Bubacarr"

const dob = 1996

// dob = 1997; // this line is illegal. We cannot change the value of a constant variable

const students = ["Musa", "Ahmad", "Muhammad"]

students.push("Basiru") //

/**
 * Read more on Data Types and Variables:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
 *
 */

// 2. Template String ``

let greet = "Hello"

let currentYear = new Date().getFullYear()

let message = `${greet} ${firstName}, how are you? Are you sure you are ${
  currentYear - dob
} old?`

console.log(message)

// Read more about Template String on:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// 3. Arrays
const totalStudents = students.length

// Array Map

const studentsAllCaps = students.map(function (student) {
  return student.toUpperCase()
})

console.log(studentsAllCaps)

/**
 * Read more about Arrays:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
 */

// 4. Arrow Functions

const studentInitials = students.map((student) => student[0].toUpperCase())

console.log(studentInitials)

// 5. Implicit Return

const greeting = () => "Hello world"

console.log(greeting())

/**
 * Read more about Arrow Functions & Implicit returns:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 */

// 6. Destructuring

let firstStudent = students[0]
let secondStudent = students[1]

console.log(firstStudent, secondStudent)

let [firstStd, secondStd, ...restOfTheStudents] = students

console.log(firstStd, secondStd, restOfTheStudents)

/**
 * Read more about Destructuring:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

// 7. Object property shorthand

const studentObj = { course: "Fullstack JS" }

const course = "Fullstack JS"

const studentObj1 = { course } // {course: "Fullstack JS"}

console.log(studentObj, studentObj1)

console.log({ firstStd })

/**
 * Read more about Object Property Shorthand
 *
 * https://gomakethings.com/object-property-shorthand-values-with-vanilla-javascript/
 */
