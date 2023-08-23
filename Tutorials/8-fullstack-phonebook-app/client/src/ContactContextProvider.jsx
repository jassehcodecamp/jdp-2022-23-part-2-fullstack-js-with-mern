import React from "react"
import axios from "axios"
import { fetchContacts, storeContact } from "./services/api"

export const ContactContext = React.createContext()

export const INITIAL_CONTACT = {
  name: "",
  email: "",
  address: "",
  phone: "",
}

const ContactContextProvider = ({ children }) => {
  const [currentContact, setCurrentContact] = React.useState(INITIAL_CONTACT)

  const [contacts, setContacts] = React.useState([])

  React.useEffect(() => {
    getContacts()
  }, [])

  const getContacts = () =>
    fetchContacts().then(({ data }) => setContacts(data))

  const createNewContact = (callback = () => {}) => {
    const id = crypto.randomUUID()
    const nextContacts = [...contacts]
    nextContacts.unshift({ ...currentContact, id })

    // setContacts(nextContacts)
    // send api request to contacts api
    storeContact(currentContact)
      .then((response) => {
        if (response.status == 201) {
          getContacts()
        }
        callback()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateContact = (callback = () => {}) => {
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === currentContact.id
    )
    let nextContacts = [...contacts]

    nextContacts[contactIndex] = currentContact

    setContacts(nextContacts)
    callback()
  }

  const deleteContact = (callback = () => {}) => {
    const nextContacts = contacts.filter(
      (contact) => contact.id !== currentContact.id
    )
    setContacts(nextContacts)

    callback()
  }
  return (
    <ContactContext.Provider
      value={{
        currentContact,
        setCurrentContact,
        contacts,
        setContacts,
        createNewContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider
