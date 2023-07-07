import React, { useState } from "react"
import Login from "./Login"
import "./App.css"

const greet = "Hi"

const greeting = `${greet} World!`

function App() {
  // let signedIn = true

  const [signedIn, setSignedIn] = useState(false)
  const [userName, updateUserName] = useState("")
  // const [signedIn, setSignedIn] = React.useState();
  // const name = "Jasseh"

  return (
    <div className="App">
      <h1>Using & Understanding JSX</h1>
      {signedIn ? (
        <React.Fragment>
          <h2>Hello {userName}</h2>
          <button onClick={() => setSignedIn(false)}>Logout</button>
          {/* <button onClick={() => (signedIn = false)}>Logout</button> */}
        </React.Fragment>
      ) : (
        <Login
          userName={userName}
          setSignedIn={setSignedIn}
          updateUserName={updateUserName}
        />
      )}
      {/* <p>{greeting}</p> */}
    </div>
  )
}

export default App
