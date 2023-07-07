import { useState } from "react"
import { intervalToDuration } from "date-fns"
// import IconArrow from "./assets/icon-arrow.svg"
import IconArrow from './IconArrow'

const validDatesMapper = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
}

function isNotLeapYearDay(day, month, year) {
  return !(day == 29 && month == 2 && year % 4 == 0)
}
function App() {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  const [age, setAge] = useState(null)
  const [errors, setErrors] = useState(null)

  const handleSubmit = (event) => {
    setErrors(null)
    event.preventDefault()

    let formErrors = {
      day: [],
      month: [],
      year: [],
    }

    if (day.trim() === "") {
      formErrors.day.push("This field is required")
    }

    if (month.trim() === "") {
      formErrors.month.push("This field is required")
    }
    if (year.trim() === "") {
      formErrors.year.push("This field is required")
    }

    if (
      day <= 0 ||
      day > 31 ||
      (day > validDatesMapper[Number(month)] &&
        isNotLeapYearDay(day, month, year))
    ) {
      formErrors.day.push("Must be a valid Date")
    }

    if (month <= 0 || month > 12) {
      formErrors.month.push("Must be a valid Date")
    }

    if (year <= 0 || year > new Date().getFullYear()) {
      formErrors.year.push("Must be in the past")
    }

    if (!Object.values(formErrors).every((error) => error.length == 0)) {
      setErrors(formErrors)
      return
    }
    const dateOfBirth = `${year}-${month}-${day}`
    const ageDifference = intervalToDuration({
      start: new Date(dateOfBirth),
      end: new Date(),
    })

    const years = ageDifference.years
    const months = ageDifference.months
    const days = ageDifference.days
    setAge({ years: years, months: months, days: days })
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#e6e6e6] px-6 py-8">
      <div className="pt-12 pb-14 px-6 sm:px-8 md:px-14 bg-white w-full max-w-[54rem] mx-auto rounded-t-3xl rounded-bl-3xl rounded-[12rem] shadow-lg">
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex gap-x-6 md:gap-x-10">
            <div className="flex flex-col w-1/3 lg:w-40">
              <label
                htmlFor="day"
                className={`uppercase ${
                  errors ? "text-[#ff5757]" : "text-[#716f6f]"
                }  tracking-[0.15em] text-sm`}
              >
                Day
              </label>
              <input
                type="text"
                id="day"
                value={day}
                onChange={(event) => setDay(event.target.value)}
                className={`py-3 md:py-4 px-4 md:px-5 border border-[#dbdbdb] w-full mt-2 rounded-md text-xl sm:text-2xl md:text-3xl md:tracking-wider placeholder:text-[#716f6f] placeholder:text-xl sm:placeholder:text-2xl  md:placeholder:text-3xl outline-none focus:border-none focus:ring-1 focus:ring-inset focus:ring-[#854dff] ${
                  errors ? "border-[#ff5757]" : "border-[#dbdbdb]"
                }`}
                placeholder="DD"
              />
              <span className="text-[#ff5757] mt-2 font-normal italic text-sm">
                {errors && errors.day[0]}
              </span>
            </div>
            <div className="flex flex-col w-1/3 lg:w-40">
              <label
                htmlFor="month"
                className={`uppercase ${
                  errors ? "text-[#ff5757]" : "text-[#716f6f]"
                }  tracking-[0.15em] text-sm`}
              >
                Month
              </label>
              <input
                className={`py-3 md:py-4 px-4 md:px-5 border border-[#dbdbdb] w-full mt-2 rounded-md text-xl sm:text-2xl md:text-3xl md:tracking-wider placeholder:text-[#716f6f] placeholder:text-xl sm:placeholder:text-2xl  md:placeholder:text-3xl outline-none focus:border-none focus:ring-1 focus:ring-inset focus:ring-[#854dff] ${
                  errors ? "border-[#ff5757]" : "border-[#dbdbdb]"
                }`}
                type="text"
                id="month"
                value={month}
                onChange={(event) => setMonth(event.target.value)}
                placeholder="MM"
              />
              <span className="text-[#ff5757] mt-2 font-normal italic text-sm">
                {errors && errors.month[0]}
              </span>
            </div>
            <div className="flex flex-col w-1/3 lg:w-40">
              <label
                htmlFor="year"
                className={`uppercase ${
                  errors ? "text-[#ff5757]" : "text-[#716f6f]"
                }  tracking-[0.15em] text-sm`}
              >
                Year
              </label>
              <input
                className={`py-3 md:py-4 px-4 md:px-5 border border-[#dbdbdb] w-full mt-2 rounded-md text-xl sm:text-2xl md:text-3xl md:tracking-wider placeholder:text-[#716f6f] placeholder:text-xl sm:placeholder:text-2xl  md:placeholder:text-3xl outline-none focus:border-none focus:ring-1 focus:ring-inset focus:ring-[#854dff] ${
                  errors ? "border-[#ff5757]" : "border-[#dbdbdb]"
                }`}
                type="text"
                id="year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                placeholder="YYYY"
              />
              <span className="text-[#ff5757] mt-2 font-normal italic text-sm">
                {errors && errors.year[0]}
              </span>
            </div>
          </div>
          <div className="flex items-center mt-8 md:mt-3">
            <div className="border border-['#716f6f'] flex-1"></div>
            <button className="md:w-24 md:h-24 w-16 h-16 bg-[#854dff] hover:bg-[#141414] rounded-full inline-flex items-center justify-center">
              {/* <img src={IconArrow} alt="Icon Arrow" /> */}
              <IconArrow className="w-[22px] h-[22px] md:w-[44px] md:h-[44px]" />
            </button>
            <div className="md:hidden border border-['#716f6f'] flex-1"></div>
          </div>
        </form>

        <div className="mt-8 sm:mt-6 md:mt-4 text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#854dff] italic leading-[1.15] sm:leading-tight md:leading-[6.5rem]">
          <div className="flex md:space-x-3 space-x-2">
            <div>
              {age ? <span>{age?.years}</span> : <span>&ndash; &ndash;</span>}
            </div>
            <div className="text-[#141414]">years</div>
          </div>
          <div className="flex space-x-3">
            <div>
              {age ? <span>{age?.months}</span> : <span>&ndash; &ndash;</span>}
            </div>
            <div className="text-[#141414]">months</div>
          </div>
          <div className="flex space-x-3">
            <div>
              {age ? <span>{age?.days}</span> : <span>&ndash; &ndash;</span>}
            </div>
            <div className="text-[#141414]">day{age?.days != 1 ? "s" : ""}</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
