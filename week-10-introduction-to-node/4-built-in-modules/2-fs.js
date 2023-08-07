const fs = require("fs")

// console.log(fs)

fs.readdir("./", (err, files) => {
  console.log(files)
  files.forEach((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      // console.log("Content:", data)
    })
  })
})
