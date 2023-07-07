import { useState } from 'react'
import IconList from "./assets/images/icon-list.svg"
import SignupIllustration from "./assets/images/illustration-sign-up-desktop.svg"

const listItems = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!'
]
function App() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center  text-charcoal-gray text-sm">
      <div className="flex items-center bg-white py-6 px-6 w-[52rem] mx-auto rounded-3xl">
        <div className="w-[55%] pl-7 pr-14 py-8">
          <div>
            <h2 className="text-5xl font-bold text-dark-slate-gray">
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
            <form action="#">
              <div>
                <label
                  htmlFor="email-address"
                  className="block font-bold text-xs"
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full rounded-md mt-1.5 py-3 text-charcoal-gray border-gray-300 placeholder:text-grey border px-4 focus:outline-none focus:border-charcoal-gray focus:ring-1 focus:ring-charcoal-gray"
                />
              </div>

              <button className="block mt-5 bg-dark-slate-gray py-4 px-4 rounded-md text-white font-bold w-full hover:bg-gradient-to-r from-[#FF527B]  to-[#FF6A3A]">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={SignupIllustration}
            alt="Sign Up Illustration"
            className="block w-full"
          />
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p className="text-grey font-medium">
          Challenge by{" "}
          <a
            className="text-red-400"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
        </p>
        <p className="text-grey">
          &copy; JCC - Part 2 of the Junior Developer Program - 2022-23. All
          rights reserved.
        </p>
      </div>
    </main>
  )
}

export default App
