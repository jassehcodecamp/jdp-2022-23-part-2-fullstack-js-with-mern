import React from "react"
import { ContactContext } from "./ContactContextProvider"

const Aside = () => {
  const { contacts } = React.useContext(ContactContext)

  // Derived States
  const allContacts = contacts.length

  const favoriteContacts = contacts.filter((contact) => contact.favorite).length

  const family = contacts.filter((contact) => contact.group === "family").length

  const colleagues = contacts.filter(
    (contact) => contact.group === "colleague"
  ).length

  return (
    <aside className="w-64 bg-indigo-700 text-center pb-6 px-8 text-gray-100">
      <div className="h-16 bg-indigo-800  flex items-center -mx-8 px-8">
        <h1 className="uppercase text-lg text-gray-100 font-bold">
          <a href="/">Phonebook App</a>
        </h1>
      </div>

      <nav className="mt-10 text-left">
        <ul className="space-y-8">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>

          <li>
            <a href="/contacts">All Contacts ({allContacts})</a>
          </li>

          <li>
            <a href="/contacts">Favorite Contacts ({favoriteContacts})</a>
          </li>

          <li>
            <a href="/contacts">Family ({family})</a>
          </li>

          <li>
            <a href="/contacts">Colleagues ({colleagues})</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside
