import express from "express"
import crypto from "crypto"

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

const myMiddleware = (req, res, next) => {
  console.log("New request")
  // req.body.test = "My test"
  next()
}

app.use(myMiddleware)
const contacts = [
  {
    id: 1,
    name: "Omar Jasseh",
    email: "omar@jassehcodecamp.com",
    phone: 3100948,
    address: "Sanchaba",
  },

  {
    id: 2,
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
  const contact = findContact(req.params.id, res)

  if (!contact) {
    return res.status(404).json({
      status: "failure",
      message: `The Contact with the Id ${req.params.id} was not found!`,
    })
  }
  return res.json(contact)
})

// Store a Contact
app.post("/contacts", (req, res) => {
  // validate Contact data
  const validatedData = validateContact(req.body)
  if (!validatedData) {
    return res.status(422).json({
      status: "failure",
      message: "The Name, Phone, and Email are required",
    })
  }

  const contact = { ...validatedData, id: crypto.randomUUID() }
  contacts.push(contact)
  return res.status(201).json({
    status: "success",
    message: "Contact created successfully",
    contact: contact,
  })
})

// Update a Contact
app.patch("/contacts/:id", (req, res) => {
  // Find Contact
  const contact = findContact(req.params.id, res)

  if (!contact) {
    return res.status(404).json({
      status: "failure",
      message: `The Contact with the Id ${req.params.id} was not found!`,
    })
  }
  // Validate Contact data
  const validatedData = validateContact(req.body, res)

  if (!validatedData) {
    return res.status(422).json({
      status: "failure",
      message: "The Name, Phone, and Email are required",
    })
  }

  const { name, phone, email, address } = validatedData
  // Update Contact
  contact.name = name
  contact.phone = phone
  contact.email = email
  contact.address = address

  return res.status(200).json({
    status: "success",
    message: "Contact updated successfully",
    contact: contact,
  })
})

// Delete Contact
app.delete("/contacts/:id", (req, res) => {
  const contact = findContact(req.params.id)
  if (!contact) {
    return res.status(404).json({
      status: "failure",
      message: `The Contact with the Id ${req.params.id} was not found!`,
    })
  }

  const contactIndex = contacts.indexOf(contact)
  contacts.splice(contactIndex, 1)

  res.status(204).end()
})

function findContact(contactId, res) {
  return contacts.find((c) => c.id == contactId)
}

function validateContact(contact) {
  const { name, phone, email } = contact
  if (!name || !phone || !email) {
    return false
  }

  return contact
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://expressjs.com/en/4x/api.html#req.body
