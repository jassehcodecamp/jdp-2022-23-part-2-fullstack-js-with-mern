import React from "react"

export const ContactContext = React.createContext()

export const INITIAL_CONTACT = {
  name: "",
  email: "",
  address: "",
  phone: "",
}

import useLocalStorage from "./hooks/use-local-storage"

const ContactContextProvider = ({ children }) => {
  const [currentContact, setCurrentContact] = React.useState(INITIAL_CONTACT)

  const [contacts, setContacts] = useLocalStorage("contacts")

  const createNewContact = (callback = () => {}) => {
    const id = crypto.randomUUID()
    const nextContacts = [...contacts]
    nextContacts.unshift({ ...currentContact, id })

    setContacts(nextContacts)
    callback()
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
