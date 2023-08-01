const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log("Hello world");
  res.send('Hello World');
})
app.get('/example', function (req, res) {
    console.log("This is example route");
    res.send('This is example route');
  })

app.listen(4000)

console.log("App listening at 4000")