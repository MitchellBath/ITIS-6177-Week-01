// Stage branch

const express = require('express')
const http = require('http')

const app = express()
const hostname = "localhost"
const port = 3000

app.get('/', (req, res) => {
  res.send("Hello world!")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})
