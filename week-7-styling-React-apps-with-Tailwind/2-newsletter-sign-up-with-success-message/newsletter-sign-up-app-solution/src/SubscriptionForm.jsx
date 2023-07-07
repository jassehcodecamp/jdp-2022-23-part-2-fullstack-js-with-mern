import React from "react"
import IconList from "./assets/images/icon-list.svg"
import SignupIllustration from "./assets/images/illustration-sign-up-desktop.svg"
import SignupIllustrationMobile from "./assets/images/illustration-sign-up-mobile.svg"
import Button from "./Button"

import { isValidEmail } from "./utilities/form-validation"

const listItems = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
]

const SubscriptionForm = ({ status, setStatus, email, setEmail }) => {
  let inputStatusClasses =
    "text-charcoal-gray border-gray-300 placeholder:text-grey border focus:ring-charcoal-gray focus:border-charcoal-gray"

  if (status == "error") {
    inputStatusClasses =
      "text-red-500 border-red-500 bg-red-100 focus:ring-red-500 focus:border-red-500"
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus("processing")
    if (!isValidEmail(email)) {
      setStatus("error")
      return
    }

    setTimeout(() => {
      setStatus("success")
    }, 400)
  }
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-center items-center w-full max-w-[52rem] sm:rounded-3xl bg-white sm:py-6 sm:px-6">
      <div className="w-full sm:w-11/20 px-6 sm:pl-7 sm:pr-14 py-8">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-dark-slate-gray">
            Stay updated!
          </h2>
          <p className="mt-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="mt-6 space-y-3">
            {listItems.map((item, index) => (
              <li key={index} className="flex gap-x-4">
                <span>
                  <img src={IconList} alt={item} />
                </span>{" "}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-9">
          <form action="#" onSubmit={handleSubmit}>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="email-address"
                  className="block font-bold text-xs"
                >
                  Email address
                </label>

                {status == "error" && (
                  <span className="text-xs text-red-500">
                    Valid email required
                  </span>
                )}
              </div>
              <input
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email-address"
                type="text"
                placeholder="email@company.com"
                className={`w-full rounded-md mt-1.5 py-3  px-4 focus:outline-none  focus:ring-1 ${inputStatusClasses}`}
              />
            </div>

            <Button disabled={status == "processing"} id="subscribe">
              {status == "processing"
                ? "Processing..."
                : "Subscribe to monthly newsletter"}
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full sm:w-9/20">
        <img
          src={SignupIllustration}
          alt="Sign Up Illustration"
          className="w-full hidden sm:block"
        />
        <img
          src={SignupIllustrationMobile}
          alt="Sign Up Illustration"
          className="block w-full sm:hidden"
        />
      </div>
    </div>
  )
}

export default SubscriptionForm
