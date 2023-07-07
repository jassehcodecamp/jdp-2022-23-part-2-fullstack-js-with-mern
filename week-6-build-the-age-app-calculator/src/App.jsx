import { useState } from "react"
import { intervalToDuration } from "date-fns"
import "./App.css"
import styles from "./App.module.css"
import IconArrow from "./assets/icon-arrow.svg"
import Card from './components/card/Card'

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
    <main>
      <Card>
        <form action="#" onSubmit={handleSubmit}>
          {/* <div className="date-wrapper"> */}
          <div className={styles["date-wrapper"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="day">Day</label>
              <input
                type="text"
                id="day"
                value={day}
                onChange={(event) => setDay(event.target.value)}
              />
              <span>{errors && errors.day[0]}</span>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="month">Month</label>
              <input
                type="text"
                id="month"
                value={month}
                onChange={(event) => setMonth(event.target.value)}
              />
              <span>{errors && errors.month[0]}</span>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="Year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
              />
              <span>{errors && errors.year[0]}</span>
            </div>
            <button>
              <img src={IconArrow} alt="Icon Arrow" />
            </button>
          </div>
        </form>

        <div className={styles["age-results"]}>
          <div className={styles.age}>
            <div>
              {age ? (
                <span>{age?.years}</span>
              ) : (
                <span className={styles.dashes}>&mdash; &mdash;</span>
              )}
            </div>
            <div>Years</div>
          </div>
          <div className={styles.age}>
            <div>
              {age ? (
                <span>{age?.months}</span>
              ) : (
                <span className={styles["dashes"]}>&mdash; &mdash;</span>
              )}
            </div>
            <div>Months</div>
          </div>
          <div className={styles.age}>
            <div>
              {age ? (
                <span>{age?.days}</span>
              ) : (
                <span className={styles.dashes}>&mdash; &mdash;</span>
              )}
            </div>
            <div>Day{age?.days != 1 ? "s" : ""}</div>
          </div>
        </div>
      </Card>
    </main>
  )
}

export default App
