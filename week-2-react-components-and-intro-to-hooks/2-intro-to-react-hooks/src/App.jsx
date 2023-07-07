import { useEffect, useState } from "react"
// import "./App.css"

function App() {
  console.log("before useState")
  const [count, setCount] = useState(0)
  const [studentName, setStudentName] = useState(
    setStudentName(window.localStorage.getItem("Student Name")) || ""
  )

  useEffect(() => {
    console.log("second useEffect")
    window.localStorage.setItem("Student Name", studentName)
  }, [studentName])

  console.log("before render")

  return (
    <div>
      <h1>React Hooks</h1>

      <h2>The useState Hook</h2>

      <input
        type="text"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
      />

      <p>{studentName.toUpperCase()}</p>

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
