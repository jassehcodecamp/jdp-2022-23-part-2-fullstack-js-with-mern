import React from "react"
import Modal from "./Modal"
import { ContactContext, INITIAL_CONTACT } from "./ContactContextProvider"

const ContactForm = ({ isOpen, setIsOpen }) => {
  const { createNewContact, updateContact, currentContact, setCurrentContact } =
    React.useContext(ContactContext)

  const handleChangeContact = (event) => {
    const nextContact = { ...currentContact }
    nextContact[event.target.name] = event.target.value

    setCurrentContact(nextContact)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (currentContact.id) {
      updateContact(() => setIsOpen(false))
    } else {
      createNewContact(() => setIsOpen(false))
    }
  }

  return (
    <div>
      <Modal
        title={`${currentContact.id ? "Edit" : "Create"} Contact`}
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
                value={currentContact.name}
                onChange={handleChangeContact}
                className="block w-full border border-gray-400 rounded leading-7 py-2.5 px-4"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">
                Phone
              </label>
              <input
                value={currentContact.phone}
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
                value={currentContact.email}
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
                value={currentContact.address}
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
    </div>
  )
}

export default ContactForm
