import http from "http"

const contacts = [
  {
    name: "Omar Jasseh",
    email: "omar@jassehcodecamp.com",
    phone: 3100948,
    address: "Sanchaba",
  },

  {
    name: "Buba Conteh",
    email: "buba@jassehcodecamp.com",
    phone: 3104015,
    address: "Bakoteh",
  },
]
const server = http.createServer((req, res) => {
  // Routes/Pages
  if (req.url == "/") {
    return res.end(JSON.stringify("Welcome to the Node Rest API"))
  }

  // Get all contacts
  if (req.url == "/contacts") {
    return res.end(JSON.stringify(contacts))
  }

  // Get a single Contact: using Route Parameters
  if (req.url == "/contacts/1") {
    return res.end(JSON.stringify(contacts[1]))
  }

  return res.end(JSON.stringify({ message: "Not Found" }))
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running on 127.0.0.1:3000")
})
