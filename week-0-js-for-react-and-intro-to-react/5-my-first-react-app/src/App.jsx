import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0) // [0, fn]

  /*  const counter = useState(0)
  const count = counter[0]
  const setCount = counter[1] */

  const updateCount = function () {
    const newCount = count + 1
    setCount(newCount)
  }

  return (
    <div className="App">
      <h1>My First React App</h1>
      <div className="card">
        <button onClick={updateCount}>count is {count}</button>
      </div>
    </div>
  )
}

export default App
