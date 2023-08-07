const EventEmitter = require("node:events")

class Notifier extends EventEmitter {
  notify(name, data) {
    this.emit(name, data)
  }
}

/* const myEmitter = new MyEmitter()
myEmitter.on("event", () => {
  console.log("an event occurred!")
})
myEmitter.emit("event")
 */

module.exports = Notifier
