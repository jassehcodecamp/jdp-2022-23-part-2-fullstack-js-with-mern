import React from "react"
import ContactsTable from "./ContactsTable"
import { ContactContext, INITIAL_CONTACT } from "./ContactContextProvider"
import ContactForm from "./ContactForm"

const Contacts = () => {
  const { setCurrentContact } = React.useContext(ContactContext)
  const [isOpenContactForm, setIsOpenContactForm] = React.useState(false)
  const createContact = () => {
    setCurrentContact(INITIAL_CONTACT)

    setIsOpenContactForm(true)
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
      <ContactForm
        isOpen={isOpenContactForm}
        setIsOpen={setIsOpenContactForm}
      />
      <ContactsTable setIsOpenContactForm={setIsOpenContactForm} />
    </div>
  )
}

export default Contacts
