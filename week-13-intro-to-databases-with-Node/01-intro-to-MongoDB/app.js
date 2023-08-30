import express from "express"
import mongoose from "mongoose"
const { Schema } = mongoose

const app = express()

try {
  await mongoose.connect("mongodb://127.0.0.1:27017/phonebook_jdp_part_2_22_23")
  console.log("Database successfully connected")
} catch (error) {
  console.log("There was an error in connecting to your Database!")
}

const contactSchema = new Schema({
  name: String,
  phone: String,
  email: String,
})

const Contact = mongoose.model("Contact", contactSchema)

app.get("/", (req, res) => {
  res.send("Hello Express with MongoDB!")
})

app.get("/contacts/create", async (req, res) => {
  const contact = new Contact({
    name: "Ahmad",
    phone: "3100948",
    email: "ahmad@jassehcodecamp.com",
  })

  const result = await contact.save()

  return res.json(result)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
