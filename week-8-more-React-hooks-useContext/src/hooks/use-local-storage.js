import React from "react"

function getDataFromLocalStorage(key) {
  console.log("fetching data from local storage")
  return JSON.parse(window.localStorage.getItem(key)) || []
}
const useLocalStorage = (key) => {
  const [data, setData] = React.useState(() => getDataFromLocalStorage(key))

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [data])
  return [data, setData]
}

export default useLocalStorage
