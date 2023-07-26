const http = require("http")

// console.log(http)

const hostname = "localhost" // '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
  console.log(request.url)
  response.setHeader("Content-Type", "text/html")
  if (request.url == "/") {
    return response.end("<h1>Home Page</h1>")
  }

  if (request.url == "/about") {
    return response.end("<h1>About Page</h1>")
  }

  if (request.url == "/services") {
    return response.end("<h1>Services Page</h1>")
  }

  response.statusCode = 404
  response.end(
    'Sorry! The page you are looking was not found. Please go to home <a href="/">Home</a>'
  )
})

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`)
})
