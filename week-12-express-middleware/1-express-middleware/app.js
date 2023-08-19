import express from "express"
import logger from "./middleware/logger.js"

const app = express()

app.use(logger)

app.get("/", (req, res) => {
  console.log(req.query)
  res.send("Hello Express Middleware!")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
