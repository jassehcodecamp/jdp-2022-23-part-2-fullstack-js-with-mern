import express from "express"
import cors from "cors"
import { contactValidationSchema } from "./validator.js"
import mongoose from "mongoose"
import { Schema } from "mongoose"

const contactSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
})

const Contact = mongoose.model("Contact", contactSchema)

const app = express()
const port = process.env.PORT || 5000

app.use(express.json()) // for parsing application/json
app.use(cors())

const myMiddleware = (req, res, next) => {
  console.log("New request")
  // req.body.test = "My test"
  next()
}

app.use(myMiddleware)

try {
  await mongoose.connect("mongodb://127.0.0.1:27017/phonebook_jdp_part_2_22_23")
  console.log("Database successfully connected")
} catch (error) {
  console.log("There was an error in connecting to your Database!")
}

// Route for our Homepage
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Phonebook API",
  })
})

// Get all Contacts
app.get("/contacts", async (req, res) => {
  // fetch all contacts
  const contacts = await Contact.find()
  res.json(contacts)
})

// Get a single Contact through a Route Parameter
app.get("/contacts/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id)

  if (!contact) {
    return res.status(404).json({
      status: "failure",
      message: `The Contact with the Id ${req.params.id} was not found!`,
    })
  }
  return res.json(contact)
})

// Store a Contact
app.post("/contacts", async (req, res) => {
  // validate Contact data

  const validatedData = contactValidationSchema.validate(req.body)
  // { value: {}, error: '"username" is required' }

  console.log(validatedData)
  if (validatedData.error) {
    return res.status(422).json({
      status: "failure",
      message: "The request has validation errors",
      error: validatedData.error,
    })
  }

  const contact = new Contact({ ...validatedData.value })
  await contact.save()
  return res.status(201).json({
    status: "success",
    message: "Contact created successfully",
    contact: contact,
  })
})

// Update a Contact
app.patch("/contacts/:id", async (req, res) => {
  // Find Contact
  const contact = await Contact.find({ _id: req.params.id })

  if (!contact) {
    return res.status(404).json({
      status: "failure",
      message: `The Contact with the Id ${req.params.id} was not found!`,
    })
  }
  // Validate Contact data
  const validatedData = contactValidationSchema.validate(req.body)

  if (!validatedData) {
    return res.status(422).json({
      status: "failure",
      message: "The Name, Phone, and Email are required",
    })
  }

  const contactToUpdate = validatedData.value
  // Update Contact
  console.log({ contactToUpdate }, validatedData)
  await Contact.updateOne({ _id: req.params.id }, contactToUpdate)

  return res.status(200).json({
    status: "success",
    message: "Contact updated successfully",
  })
})

// Delete Contact
app.delete("/contacts/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    return res.status(404).json({
      status: "failure",
      message: `The Contact with the Id ${req.params.id} was not found!`,
    })
  }

  try {
    await Contact.deleteOne({ _id: req.params.id })
    res.status(204).end()
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "There was an error in processing your request",
    })
  }
})

function findContact(contactId, res) {
  return contacts.find((c) => c.id == contactId)
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://expressjs.com/en/4x/api.html#req.body
