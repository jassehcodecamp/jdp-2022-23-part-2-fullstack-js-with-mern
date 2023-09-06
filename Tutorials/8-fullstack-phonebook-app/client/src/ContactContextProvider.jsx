import React from "react"
import axios from "axios"
import {
  fetchContacts,
  storeContact,
  updateContactApi,
  deleteContactApi,
} from "./services/api"

export const ContactContext = React.createContext()

export const INITIAL_CONTACT = {
  name: "",
  email: "",
  address: "",
  phone: "",
}

const ContactContextProvider = ({ children }) => {
  const [currentContact, setCurrentContact] = React.useState(INITIAL_CONTACT)

  const [contacts, setContacts] = React.useState([])
  const [formErrors, setFormErrors] = React.useState(null)

  React.useEffect(() => {
    getContacts()
  }, [])

  const getContacts = () =>
    fetchContacts().then(({ data }) => setContacts(data))

  const createNewContact = (callback = () => {}) => {
    // setContacts(nextContacts)
    // send api request to contacts api
    storeContact(currentContact)
      .then((response) => {
        if (response.status == 201) {
          getContacts()
        }
        callback()
      })
      .catch((error) => {
        console.log(error.response)
        if (error.response.status == 422) {
          let errors = error.response.data
          setFormErrors({
            field: errors.error.details[0].context.label,
            message: errors.error.details[0].message.split('"').join(""),
          })
        }
      })
  }

  const updateContact = async (callback = () => {}) => {
    const result = await updateContactApi(currentContact._id, currentContact)
    console.log(result)
    if (result.status == 200) {
      /* 
        let result = await fetchContacts();
        let nextContacts = result.data;
      */
      let { data: nextContacts } = await fetchContacts()
      setContacts(nextContacts)
      callback()
    }
  }

  const deleteContact = async (callback = () => {}) => {
    try {
      const result = await deleteContactApi(currentContact._id)
      if (result.status == 204) {
        let { data: nextContacts } = await fetchContacts()
        setContacts(nextContacts)
        callback()
      }
    } catch (error) {
      alert("There was an error in deleting the contact")
    }
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
        formErrors,
        setFormErrors,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider
