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

  // const [contacts, setContacts] = React.useState(fetchContacts)
  const [contacts, setContacts] = useLocalStorage("key")

  const createNewContact = (contact, callback) => {
    const id = crypto.randomUUID()
    const nextContacts = [...contacts]
    nextContacts.unshift({ ...contact, id })

    setContacts(nextContacts)
    callback()
  }

  const updateContact = (id, contact, callback) => {
    const contactIndex = contacts.findIndex((contact) => contact.id === id)
    let nextContacts = [...contacts]
    // nextContacts.splice(contactIndex, 1, contact);

    nextContacts[contactIndex] = contact

    setContacts(nextContacts)
    callback()
  }

  const deleteContact = (callback = null) => {
    const nextContacts = contacts.filter(
      (contact) => contact.id !== currentContact.id
    )
    setContacts(nextContacts)

    // callback?.()
    if (callback) callback()
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
