import React from "react"
import ContactsTable from "./ContactsTable"
import Modal from "./Modal"
import { ContactContext } from "./ContactContextProvider"

const INITIAL_CONTACT = {
  name: "",
  email: "",
  address: "",
  phone: "",
}
const Contacts = () => {
  const { contacts, setContacts, createNewContact, updateContact } =
    React.useContext(ContactContext)

  const [isOpen, setIsOpen] = React.useState(false)

  const [contact, setContact] = React.useState(INITIAL_CONTACT)

  const editContact = (contactIndex) => {
    // const contact = contacts.find((contact) => contact.id === contactId)
    const nextContact = contacts[contactIndex]
    setContact({ ...nextContact })
    setIsOpen(true)
  }

  const handleChangeContact = (event) => {
    const nextContact = { ...contact }
    nextContact[event.target.name] = event.target.value

    setContact(nextContact)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (contact.id) {
      updateContact(contact.id, contact, () => setIsOpen(false))
    } else {
      createNewContact(contact, () => setIsOpen(false))
    }
  }

  const deleteContact = (index) => {
    // const nextContacts = [...contacts]
    // nextContacts.splice(index, 1)

    const nextContacts = contacts.filter(
      (contact, contactIndex) => contactIndex !== index
    )
    setContacts(nextContacts)
    setIsOpen(false)
  }

  const createContact = () => {
    setContact(INITIAL_CONTACT)

    setIsOpen(true)
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="uppercase">All Contacts</h2>
        <button
          onClick={createContact}
          className="py-3 px-4 bg-indigo-700 text-white uppercase rounded"
        >
          New Contact
        </button>
      </div>
      <Modal
        title={`${contact.id ? "Edit" : "Create"} Contact`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <form action="/contacts" method="post" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={contact.name}
                onChange={handleChangeContact}
                className="block w-full border border-gray-400 rounded leading-7 py-2.5 px-4"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">
                Phone
              </label>
              <input
                value={contact.phone}
                onChange={handleChangeContact}
                type="text"
                name="phone"
                id="phone"
                className="block w-full border border-gray-400 rounded leading-7 py-2.5 px-4"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                value={contact.email}
                onChange={handleChangeContact}
                type="email"
                name="email"
                id="email"
                className="block w-full border border-gray-400 rounded leading-7 py-2.5 px-4"
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-1">
                Address
              </label>
              <textarea
                value={contact.address}
                onChange={handleChangeContact}
                name="address"
                id="address"
                rows="2"
                cols="10"
                className="block w-full border border-gray-400 rounded leading-7 py-2.5 px-4"
              />
            </div>
          </div>

          <div className="py-3 flex justify-end items-center space-x-4 mt-8">
            <button
              type="reset"
              className="py-2.5 px-5 rounded bg-gray-100 text-gray-600 font-semibold"
            >
              Reset
            </button>
            <button className="btn-primary font-semibold">Save</button>
          </div>
        </form>
      </Modal>
      <ContactsTable
        updateContact={updateContact}
        handleChangeContact={handleChangeContact}
        handleSubmit={handleSubmit}
        editContact={editContact}
        deleteContact={deleteContact}
      />
    </div>
  )
}

export default Contacts
