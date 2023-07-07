import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <header>
        <h1>Dev Portfolio</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Projects Page</h2>
      </main>
      <footer>Footer Section</footer>
    </>
  )
}

export default App
