import React from "react"
import IconSuccess from "./assets/images/icon-success.svg"
import Button from "./Button"

const SubscriptionFeedback = ({ email, resetForm }) => {
  return (
    <div className="max-w-md w-full sm:rounded-2xl bg-white py-6 sm:py-8 px-6 sm:px-10">
      <div>
        <img src={IconSuccess} alt="Success Icon" />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl sm:text-[2.75rem] sm:leading-[2.7rem] font-bold text-dark-slate-gray">
          Thanks for subscribing!
        </h2>
      </div>
      <div className="mt-4 mb-8">
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button onClick={resetForm}>Dismiss message</Button>
    </div>
  )
}

export default SubscriptionFeedback
