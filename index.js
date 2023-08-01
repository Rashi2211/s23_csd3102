const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log("Hello world");
  res.send('Hello World');
})

app.listen(3000)

console.log("App listening at 3000")