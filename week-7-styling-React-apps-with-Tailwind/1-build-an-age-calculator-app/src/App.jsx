import { useState } from "react"
import { intervalToDuration } from "date-fns"
// import IconArrow from "./assets/icon-arrow.svg"

import FormField from "./components/FormField"
import SubmitButton from "./components/SubmitButton"
import ResultItem from "./components/ResultItem"
import Footer from "./components/Footer"

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
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#e6e6e6] px-6 py-8">
      <div className="pt-12 pb-14 px-6 sm:px-8 md:px-14 bg-white w-full max-w-[54rem] mx-auto rounded-3xl rounded-br-[12rem] shadow-lg">
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex gap-x-6 md:gap-x-10">
            <FormField
              value={day}
              setValue={setDay}
              errors={errors}
              label="day"
              placeholder="DD"
            />

            <FormField
              value={month}
              setValue={setMonth}
              errors={errors}
              label="month"
              placeholder="MM"
            />

            <FormField
              value={year}
              setValue={setYear}
              errors={errors}
              label="year"
              placeholder="YYYY"
            />
          </div>
          <SubmitButton />
        </form>

        <div className="mt-8 sm:mt-6 md:mt-4 text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#854dff] italic leading-[1.15] sm:leading-tight md:leading-[6.5rem]">
          <ResultItem value={age?.years} label="years" />
          <ResultItem value={age?.months} label="months" />
          <ResultItem value={age?.days} label="days" />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default App
