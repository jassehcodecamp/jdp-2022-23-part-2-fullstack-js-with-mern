import { useReducer, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

const counterReducer = (state, action) => {
  console.log({ action, state })

  const nextState = { ...state }

  if (action.type === "increment") {
    nextState.count++
  }

  if (action.type === "decrement") {
    nextState.count--
  }

  if (action.type === "randomize") {
    nextState.count = action.value
  }
  return nextState
}
function App() {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  const increment = () => {
    dispatch({ type: "increment" })
  }
  const decrement = () => {
    dispatch({ type: "decrement" })
  }
  const randomize = () => {
    dispatch({ type: "randomize", value: Math.floor(Math.random() * 100) + 1 })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>count is {state.count}</button>
        <div style={{ display: "flex", gap: 20, marginTop: 10 }}>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={randomize}>Random Number</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
