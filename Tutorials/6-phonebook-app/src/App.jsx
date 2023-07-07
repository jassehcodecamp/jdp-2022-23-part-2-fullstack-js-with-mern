import React from "react"
import Aside from "./Aside"
import Contacts from "./Contacts"

export const ContactContext = React.createContext()

// export { ContactContext };

function App() {
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
    console.log(id)
    const nextContacts = [...contacts]
    nextContacts.unshift({ ...contact, id })

    setContacts(nextContacts)
    // setIsOpen(false)
    callback()
  }

  const updateContact = (id, contact, callback) => {
    const contactIndex = contacts.findIndex((contact) => contact.id === id)
    let nextContacts = [...contacts]

    // nextContacts.splice(contactIndex, 1, contact);

    nextContacts[contactIndex] = contact

    setContacts(nextContacts)
    // setIsOpen(false)
    callback()
  }
  return (
    <ContactContext.Provider
      value={{ contacts, setContacts, createNewContact, updateContact }}
    >
      <div className="min-h-screen flex bg-gray-50">
        <Aside />
        <main className="flex-1">
          <div className="px-8 flex items-center h-16 mb-4 bg-white shadow-sm">
            <div className="ml-auto">
              <ul className="flex items-center gap-x-4 text-gray-500">
                <li>
                  <span className="capitalize text-gray-600">Omar Jasseh</span>
                </li>
                <li>
                  <form action="/logout" method="post">
                    <button>Logout</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-8 px-8 container mx-auto">
            <Contacts />
          </div>
        </main>
      </div>
    </ContactContext.Provider>
  )
}

export default App
