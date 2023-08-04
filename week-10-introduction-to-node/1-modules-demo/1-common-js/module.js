const greet = "Hello World"

const sum = (a, b) => a + b
const multiply = (a, b) => a * b

/*
module.exports = {
  greet,
  sum,
  multiply,
}

module.exports.name = "Omar Jasseh"

module.exports.student = {
  name: "Buba Conteh",
  course: "JDP Part 2 - Fullstack JavaScript",
}
*/

// You can also use the Global exports object. Please note you can't mix both exports and module.exports in the same file. You won't get an error but only the module.exports will take effect

exports.student = {
  name: "Buba Conteh",
  course: "JDP Part 2 - Fullstack JavaScript",
}

exports.sum = sum

exports.multiply = multiply
exports.greet = greet

exports.name = "Omar Jasseh"
