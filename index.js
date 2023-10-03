const express = require('express')
const app = express()
const birds = require("./routes/birds.js")
<<<<<<< Updated upstream

app.use(express.json())

app.use('/birds', birds)
=======
const articles = require("./routes/articles.js")
app.use(express.json())

app.use('/', articles)
>>>>>>> Stashed changes

app.set('port', 8080)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)

)