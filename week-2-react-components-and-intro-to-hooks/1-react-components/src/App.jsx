import PrimaryHeading from "./PrimaryHeading"
import "./App.css"
import LoginForm from "./LoginForm"

function App({ primaryHeadingText }) {
  return (
    <div>
      {/* <PrimaryHeading>React Components</PrimaryHeading>
      <PrimaryHeading children="Primary Heading" />
      <p>I am a paragraph is a basic React Component</p> */}

      <LoginForm primaryHeadingText={primaryHeadingText} />
    </div>
  )
}

export default App
