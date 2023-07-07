import React from "react"
import Avatar from "./Avatar"
import ConfirmRequestButton from "./ConfirmRequestButton"
import FriendRequestDetails from "./FriendRequestDetails"

const FriendRequestItem = ({ friendRequest }) => {
  return (
    <div className="freind-request-wrapper">
      <div className="user-details">
        <Avatar
          profile_photo={friendRequest.profile_photo}
          name={friendRequest.name}
        />
        <FriendRequestDetails
          name={friendRequest.name}
          mutual_friends={friendRequest.mutual_friends}
        />
      </div>

      <div>
        <ConfirmRequestButton text="Confirm" />
      </div>
    </div>
  )
}

export default FriendRequestItem
