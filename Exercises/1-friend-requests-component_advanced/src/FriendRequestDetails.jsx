import React from "react"

const FriendRequestDetails = ({ name, mutual_friends }) => {
  return (
    <div>
      <p className="friend-name">{name}</p>
      <p>
        <span className="mutual-friends">{mutual_friends}</span> mutal friend
        {mutual_friends !== 1 && "s"}
        {/* mutal friend{friendRequest.mutual_friends !== 1 ? "s" : ""} */}
      </p>
    </div>
  )
}

export default FriendRequestDetails
