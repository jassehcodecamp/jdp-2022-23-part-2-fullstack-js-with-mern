import React from "react"

const Avatar = ({ profile_photo, name }) => {
  return (
    <img
      className="avatar"
      src={`./profile-photos/${profile_photo}`}
      alt={`${name.split(" ")[0]}'s Profile Photo`}
      title={name}
    />
  )
}

export default Avatar
