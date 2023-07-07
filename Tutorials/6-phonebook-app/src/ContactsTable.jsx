import React from "react"

const ContactsTable = ({ contacts, deleteContact, editContact }) => {
  return (
    <>
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
                          onClick={() => deleteContact(index)}
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
