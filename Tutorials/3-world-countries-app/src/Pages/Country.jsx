import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Country = () => {
  const navigate = useNavigate()
  const { countryName } = useParams()

  const [country, setCountry] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountry(response.data[0])
        setIsLoading(false)
      })
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
        <div className="country-details-container">
          <div>
            <button className="back-button" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
          {JSON.stringify(country)}
          <div className="country-details">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="country-flag-container">
                  <img src={country.flags.svg} alt={country.name.common} />
                </div>

                <div className="country-info-container">
                  <h2>{country.name.common}</h2>
                  <div className="country-info-wrapper">
                    <ul className="country-info">
                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">
                          Native Name:
                        </strong>
                        <span className="country-info-text">
                          {" "}
                          Country Official Name{" "}
                        </span>
                      </li>
                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">
                          Population:
                        </strong>
                        <span className="country-info-text">
                          {" "}
                          Country Population{" "}
                        </span>
                      </li>
                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">Region:</strong>
                        <span className="country-info-text">
                          Country Region
                        </span>
                      </li>
                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">
                          Sub Region:
                        </strong>
                        <span className="country-info-text">
                          Country Sub Region
                        </span>
                      </li>
                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">Capital:</strong>
                        <span className="country-info-text">
                          {" "}
                          Country Capital{" "}
                        </span>
                      </li>
                    </ul>

                    <ul className="country-info">
                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">
                          {" "}
                          Top Level Domain:{" "}
                        </strong>
                        <span className="country-info-text">
                          Country Top Level Domain
                        </span>
                      </li>

                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">
                          Currencies:
                        </strong>
                        <span className="country-info-text">
                          <span>Country Currencies</span>
                        </span>
                      </li>

                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">
                          Languages:
                        </strong>
                        <span className="country-info-text">
                          {" "}
                          Country Languages{" "}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="country-borders-wrapper">
                    <ul className="country-info">
                      <li className="country-info-content-wrapper">
                        <strong className="country-info-label">
                          {" "}
                          Border Countries:{" "}
                        </strong>
                        <div className="country-borders">
                          <a href="" className="badge">
                            Border Country 1
                          </a>
                          <a href="" className="badge">
                            Border Country 2
                          </a>
                          <a href="" className="badge">
                            Border Country 3
                          </a>
                          <span style={{ marginTop: 4 }}>Or No Borders</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Country
