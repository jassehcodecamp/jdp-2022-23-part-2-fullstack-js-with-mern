import { useState } from 'react'

import Footer from './Footer'
import SubscriptionCard from './SubscriptionCard'


function App() {
// const [status, setStatus] = useState("idle"); // success, error, idle
  return (
    <main className="min-h-screen flex flex-col items-center justify-center  text-charcoal-gray text-sm">
      <SubscriptionCard />
      <Footer />
    </main>
  )
}

export default App
