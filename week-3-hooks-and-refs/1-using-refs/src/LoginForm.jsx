import React from "react"
import { Button } from "./Button"
import Label from "./Label"
import "./Login.css"

const LoginForm = () => {
  const [status, setStatus] = React.useState("idle")
  const emailInputRef = React.useRef(null)
  const passwordInputRef = React.useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    alert(
      `Your email is ${emailInputRef.current.value}. and your password is ${passwordInputRef.current.value}`
    )

    setStatus("submitted")

    setTimeout(() => setStatus("idle"), 3000)
  }
  console.log("Form Rendered")
  return (
    <div className="login-wrapper">
      <h2>Login Form: {status}</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email-address">Email Address</Label>
          <input type="email" ref={emailInputRef} id="email-address" />

          {emailInputRef.current?.value}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="input-group">
            <input ref={passwordInputRef} type="password" id="password" />
          </div>
        </div>

        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
