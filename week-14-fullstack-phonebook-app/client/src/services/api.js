import axios from "axios"

export const fetchContacts = () => axios.get("http://localhost:5000/contacts")

export const fetchContact = (contactId) =>
  axios.get(`http://localhost:5000/contacts/${contactId}`)

export const storeContact = (contact) =>
  axios.post("http://localhost:5000/contacts", contact)

export const updateContactApi = (contactId, contact) =>
  axios.patch(`http://localhost:5000/contacts/${contactId}`, contact)

export const deleteContactApi = (contactId) =>
  axios.delete(`http://localhost:5000/contacts/${contactId}`)
