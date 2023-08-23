import axios from "axios"

export const fetchContacts = () => axios.get("http://localhost:5000/contacts")

export const storeContact = (contact) =>
  axios.post("http://localhost:5000/contacts", contact)
