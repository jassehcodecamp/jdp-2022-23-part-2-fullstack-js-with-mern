/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function App({ children }) {
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
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <a href="https://facebook.com" target={"_blank"} rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <main>{children}</main>
        <footer>Footer Section</footer>
      </div>
    </>
  )
}

export default App
