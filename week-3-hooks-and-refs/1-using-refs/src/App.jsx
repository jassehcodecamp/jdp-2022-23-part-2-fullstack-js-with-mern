import { useState, useRef, useEffect } from "react"
import LoginForm from "./LoginForm"
// import "./App.css"

function App() {
  // const [count, setCount] = useState(0)
  // const buttonRef = useRef()

  // console.log(buttonRef)
  /* useEffect(() => {
    console.log(buttonRef)

    console.log(buttonRef.current.textContent)
  }) */

  return (
    <>
      <h1>React Refs with useRef</h1>
      <LoginForm />
      {/* <div className="card">
        <button ref={buttonRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
