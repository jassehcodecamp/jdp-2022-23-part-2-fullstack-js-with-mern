const OS = require("os")

const osType = OS.type()
const machine = OS.machine()

console.log("OS Type:", osType)
console.log("Machine:", machine)
console.log("OS version:", OS.version())
console.log("Total Memory", OS.totalmem() / (1024 * 1024))
console.log("Available/Free Memory", OS.freemem() / (1024 * 1024))
