import { Aside } from "./Aside"
import Contacts from "./Contacts"

function App() {
  return (
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
  )
}

export default App
