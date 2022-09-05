const express = require('express')
const app = express()
const port = 3000

//route 
app.get('/', (req, res) => {
    var a = 2;
    var b = 3;
    var c = a + b;
  res.send('Hello World from Việt Nam :)) ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})