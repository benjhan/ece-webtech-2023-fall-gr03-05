const express = require('express')
const app = express()
const birds = require("./routes/birds.js")

app.use(express.json())

app.use('/birds', birds)

app.set('port', 8080)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)

)