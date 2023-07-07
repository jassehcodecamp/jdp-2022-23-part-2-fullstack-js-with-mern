import { useState } from "react"
import "./App.css"

// let outro = "I am done with React";

function App() {
  const [intro, setIntro] = useState("Intro To React States")
  const [isEditing, setIsEditing] = useState(false)

  const [topics, setTopics] = useState([
    "Intro to JSX",
    "Intro to Components",
    "Intro to Hooks",
    "Working with Forms",
  ])

  return (
    <div className="App">
      <h1>
        {isEditing ? (
          <input
            type="text"
            value={intro}
            onChange={(event) => setIntro(event.target.value)}
          />
        ) : (
          intro
        )}{" "}
      </h1>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Update" : "Edit"} Intro
      </button>

      <hr />

      <ul>
        <button>Add</button>
        {topics.map((topic) => (
          <li key={topic}>
            {topic} <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
