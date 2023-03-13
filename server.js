const path = require("path")
const fs = require("fs")
const express = require("express")
const { log } = require("console")

const app = express()
const port = 8080

app.use("/public/", express.static(path.join(__dirname, "/public")))
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
