//24/7 Keep Alive//

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Sowad Op')
})

app.listen(port, () => {
  console.log(`24/7 enabled sowad op`)
}) 
function keepAlive(){}
module.exports = keepAlive;
