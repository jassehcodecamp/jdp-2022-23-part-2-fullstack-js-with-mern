const Notifier = require("./notify")

const notifier = new Notifier()

notifier.on("student-registered", (event) => {
  console.log("Send email registration", event)
})

notifier.notify("student-registered", { name: "Ahmad", course: "JDP Part 2" })
