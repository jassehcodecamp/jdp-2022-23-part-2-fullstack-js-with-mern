import React from "react"
import Modal from "./Modal"

import { ContactContext } from "./ContactContextProvider"

const ContactDeleteDialog = ({ isOpen, setIsOpen }) => {
  const { deleteContact, currentContact } = React.useContext(ContactContext)
  return (
    <Modal title="Delete Contact" isOpen={isOpen} setIsOpen={setIsOpen}>
      <p className="text-gray-500">
        Are you sure you want to delete the Contact with name{" "}
        <strong className="text-red-600 font-semibold">
          {currentContact.name}
        </strong>
      </p>
      <div className="mt-6 flex justify-end items-center gap-x-3">
        <button
          className="py-3 px-4 rounded text-gray-500 bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          No, Cancel
        </button>
        <button
          className="py-3 px-4 bg-red-100 text-red-500 rounded"
          onClick={() => deleteContact(() => setIsOpen(false))}
        >
          Yes, Continue
        </button>
      </div>
    </Modal>
  )
}

export default ContactDeleteDialog
