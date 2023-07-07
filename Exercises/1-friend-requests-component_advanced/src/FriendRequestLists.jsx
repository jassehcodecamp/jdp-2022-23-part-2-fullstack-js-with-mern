import React from "react"
import FriendRequestItem from "./FriendRequestItem"

const friendRequests = [
  {
    name: "Aminatou Njie",
    mutual_friends: 10,
    profile_photo: "aminatou_njie.jpg",
  },
  {
    name: "Tida Jobe",
    mutual_friends: 7,
    profile_photo: "tida_jobe.jpg",
  },
  {
    name: "Mahmoud Ceesay",
    mutual_friends: 1,
    profile_photo: "mahmoud_ceesay.jpg",
  },
  {
    name: "Omar Sallah",
    mutual_friends: 11,
    profile_photo: "omar_sallah.jpg",
  },
]

const FriendRequestLists = () => {
  return friendRequests.map((friendRequest, index) => (
    <FriendRequestItem key={index} friendRequest={friendRequest} />
  ))
}

export default FriendRequestLists
