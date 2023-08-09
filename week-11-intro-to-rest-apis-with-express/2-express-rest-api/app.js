import express from "express"

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

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

// Route for our Homepage
app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Get all Contacts
app.get("/contacts", (req, res) => {
  res.json(contacts)
})

// Get a single Contact through a Route Parameter
app.get("/contacts/:id", (req, res) => {
  res.json(contacts[req.params.id])
})

// Store a Contact
app.post("/contacts", (req, res) => {
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://expressjs.com/en/4x/api.html#req.body
