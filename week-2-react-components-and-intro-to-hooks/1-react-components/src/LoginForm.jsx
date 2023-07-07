import React from "react"
import { Button } from "./Button"
import Input from "./Input"
import Label from "./Label"

import EyeOpenIcon from "./assets/eye-icon.svg"
import PrimaryHeading from "./PrimaryHeading"

const LoginForm = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)
  const [rememberMe, setRememberMe] = React.useState(false)

  // Derived State
  const showPasswordTitle = showPassword ? "Hide Password" : "Show Password"

  return (
    <div className="login-wrapper">
      <PrimaryHeading text="Login Form" />
      <form action="#">
        <div>
          <Label htmlFor="email-address">Email Address</Label>
          <Input
            type="email"
            id="email-address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="input-group">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <i className="icon-wrapper">
              <img
                src={EyeOpenIcon}
                className="icon"
                alt="Eye Icon"
                title={showPasswordTitle}
                onClick={() => setShowPassword(!showPassword)}
              />
            </i>
          </div>
        </div>

        <div>
          <Label htmlFor="remember-me">
            <Input
              type="checkbox"
              id="remember-me"
              value={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />{" "}
            Remember me
          </Label>
          {rememberMe.toString()}
        </div>

        <Button />
      </form>
    </div>
  )
}

export default LoginForm
