import React from "react"

// const Login = (props) => {
const Login = ({ userName, updateUserName, setSignedIn }) => {
  // const { userName, updateUserName, setSignedIn } = props
  const handleSubmit = function (event) {
    event.preventDefault()
    // console.log("submitted")
    setSignedIn(true)
  }
  return (
    <div>
      <h2>Please Sign In Here</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>{" "}
          <input
            required={true}
            type="text"
            value={userName}
            onChange={(event) => updateUserName(event.target.value)}
          />
          {/* <p>Username is : {userName}</p> */}
          <button>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default Login
