import React from "react"

export const ContactContext = React.createContext()

const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = React.useState([
    {
      id: 1,
      name: "Ahmad Jabbi",
      email: "ahamdjabbi@jcc.com",
      phone: 5114157,
      address: "Busumbala",
      favorite: true,
      group: "",
    },
    {
      id: 2,
      name: "Musa Keita",
      email: "musakeita@jcc.com",
      phone: 7711257,
      address: "Manjai",
      favorite: true,
      group: "colleague",
    },
    {
      id: 3,
      name: "Mam Fatou Drammeh",
      email: "mamfatoud@jcc.com",
      phone: 7711257,
      address: "Banjul",
      favorite: false,
      group: "colleague",
    },
    {
      id: 4,
      name: "Eliyasu Jallow",
      email: "eliyasuj@jcc.com",
      phone: 7711257,
      address: "Sinchu Alagie",
      favorite: false,
      group: "",
    },
  ])

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
  return (
    <ContactContext.Provider
      value={{ contacts, setContacts, createNewContact, updateContact }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider
