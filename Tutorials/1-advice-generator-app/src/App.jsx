import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [advice, setAdvice] = useState("")
  // const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice))
  }, [advice])

  return (
    <>
      <h1>Advice Generator App</h1>
      <div className="card">
        <p className="read-the-docs">{!advice ? "Loading..." : advice}</p>
        <button onClick={() => setAdvice("")}>New Advice</button>
      </div>
    </>
  )
}

export default App
