import React from "react"
import { ContactContext } from "./ContactContextProvider"

import Modal from "./Modal"

const ContactsTable = ({ editContact }) => {
  const { contacts, deleteContact, currentContact, setCurrentContact } =
    React.useContext(ContactContext)

  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)

  return (
    <>
      <Modal
        title="Delete Contact"
        isOpen={showDeleteDialog}
        setIsOpen={setShowDeleteDialog}
      >
        <p className="text-gray-500">
          Are you sure you want to delete the Contact with name{" "}
          <strong className="text-red-600 font-semibold">
            {currentContact.name}
          </strong>
        </p>
        <div className="mt-6 flex justify-end items-center gap-x-3">
          <button
            className="py-3 px-4 rounded text-gray-500 bg-gray-100"
            onClick={() => setShowDeleteDialog(false)}
          >
            No, Cancel
          </button>
          <button
            className="py-3 px-4 bg-red-100 text-red-500 rounded"
            onClick={() => deleteContact(() => setShowDeleteDialog(false))}
          >
            Yes, Continue
          </button>
        </div>
      </Modal>
      <div className="mt-8 bg-white">
        <div className="shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="uppercase text-sm font-medium text-gray-800 bg-gray-100">
              <tr>
                <td className="py-3.5 px-4 border-b">Name</td>
                <td className="py-3.5 px-4 border-b">Phone</td>
                <td className="py-3.5 px-4 border-b">Email</td>
                <td className="py-3.5 px-4 border-b">Address</td>
                <td className="py-3.5 px-4 border-b">Actions</td>
              </tr>
            </thead>

            <tbody className="text-gray-500 divide-y divide-gray-200 bg-white">
              {!contacts.length && (
                <tr>
                  <td colSpan={5}>
                    <div className="py-16 px-10 text-gray-400 text-sm flex items-center justify-center">
                      No Contacts!
                    </div>
                  </td>
                </tr>
              )}
              {contacts.map((contact, index) => {
                return (
                  <tr key={contact.id}>
                    <td className="py-4 px-4">{contact.name}</td>
                    <td className="py-4 px-4">{contact.phone}</td>
                    <td className="py-4 px-4">{contact.email}</td>
                    <td className="py-4 px-4">{contact.address}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          className="text-blue-500"
                          onClick={() => editContact(index)}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setShowDeleteDialog(true)
                            setCurrentContact(contact)
                          }}
                          type="button"
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ContactsTable
