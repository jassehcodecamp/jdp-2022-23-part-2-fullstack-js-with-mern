const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.addListener("student-registered", () => {
  console.log("The student has registered")
})

eventEmitter.emit("student-registered")
