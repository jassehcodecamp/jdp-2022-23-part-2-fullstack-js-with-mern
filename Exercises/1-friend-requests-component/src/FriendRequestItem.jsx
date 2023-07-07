import React from "react"
import Avatar from "./Avatar"
import ConfirmRequestButton from "./ConfirmRequestButton"

const FriendRequestItem = ({ friendRequest }) => {
  return (
    <div className="freind-request-wrapper">
      <div className="user-details">
        <Avatar
          profile_photo={friendRequest.profile_photo}
          name={friendRequest.name}
        />
        <div>
          <p className="friend-name">{friendRequest.name}</p>
          <p>
            <span className="mutual-friends">
              {friendRequest.mutual_friends}
            </span>{" "}
            mutal friend
            {friendRequest.mutual_friends !== 1 && "s"}
            {/* mutal friend{friendRequest.mutual_friends !== 1 ? "s" : ""} */}
          </p>
        </div>
      </div>

      <div>
        <ConfirmRequestButton text="Confirm" />
      </div>
    </div>
  )
}

export default FriendRequestItem
