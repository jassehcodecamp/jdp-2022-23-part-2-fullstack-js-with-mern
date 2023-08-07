const Notifier = require("./notify")

const notifier = new Notifier()

notifier.notify("student-registered", { name: "Ahmad", course: "JDP Part 2" })
