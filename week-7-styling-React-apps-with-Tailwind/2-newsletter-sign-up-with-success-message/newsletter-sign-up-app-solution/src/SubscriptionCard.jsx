import React, { useState } from "react"

import SubscriptionFeedback from "./SubscriptionFeedback"
import SubscriptionForm from "./SubscriptionForm"

const SubscriptionCard = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const resetForm = () => {
    setStatus("idle")
    setEmail("")
  }

  return (
    <div>
      {status != "success" ? (
        <SubscriptionForm
          email={email}
          setEmail={setEmail}
          status={status}
          setStatus={setStatus}
        />
      ) : (
        <SubscriptionFeedback email={email} resetForm={resetForm} />
      )}
    </div>
  )
}

export default SubscriptionCard
