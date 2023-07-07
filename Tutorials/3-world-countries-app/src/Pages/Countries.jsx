import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import { CountryCard } from "../Components/CountryCard"

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <header>
        <div>
          <h1>Where in the world?</h1>

          <div>Dark Mode</div>
        </div>
      </header>
      <main>
        <div className="filters">
          <form action="">
            <div className="input-wrapper">
              <input
                className="search-input"
                type="text"
                placeholder="Search for a country..."
              />
            </div>

            <div className="select-wrapper">
              <select className="select-input" name="region" id="region">
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </form>
        </div>
        {/* <div>{JSON.stringify(countries)}</div> */}

        <div className="countries">
          {countries.map((country) => (
            <CountryCard country={country} key={country.name.common} />

            /*   <div className="country-card" key={country.name.common}>
      <div className="card-header">
        <Link to={`/countries/${country.name.common}`}>
          <img className="flag" src={country.flags.png} alt="The Gambia Flag" />
        </Link>
      </div>
      <div className="card-body">
        <h2>{country.name.common}</h2>
        <ul className="country-info">
          <li className="contry-info-content-wrapper">
            <strong className="country-info-label">Population:</strong>{" "}
            <span>{country.population.toLocaleString()}</span>
          </li>
          <li className="contry-info-content-wrapper">
            <strong className="country-info-label">Region:</strong>{" "}
            <span>{country.region}</span>
          </li>
          <li className="contry-info-content-wrapper">
            <strong className="country-info-label">Capital: </strong>
            <span>{country.capital ? country.capital[0] : "N/A"}</span>
          </li>
        </ul>
      </div>
    </div> */
          ))}
        </div>
      </main>
    </>
  )
}

export default App
