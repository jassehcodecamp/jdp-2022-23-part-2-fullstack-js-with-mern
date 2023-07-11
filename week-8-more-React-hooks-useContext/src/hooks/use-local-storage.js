import React from "react"
const useLocalStorage = (key) => {
  const [data, setData] = React.useState(
    JSON.parse(window.localStorage.getItem(key)) || []
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [data])
  return [data, setData]
}

export default useLocalStorage
