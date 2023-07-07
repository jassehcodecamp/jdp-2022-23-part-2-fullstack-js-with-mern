import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Countries from "./Pages/Countries.jsx"
import Country from "./Pages/Country.jsx"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  },
  {
    path: "/countries/:countryName",
    element: <Country />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
