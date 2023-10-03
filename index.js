// Import modules
const express = require('express')
const app = express()
const home = require("./routes")
const hello = require("./routes/hello")
const articles = require("./routes/get-articles")

// Import database
// const db = require('./database')

// Use the body parser middleware
app.use(express.json())

app.use('/', home);
app.use('/hello', hello);
app.use('/articles', articles)

app.set('port', 8080)

app.listen(
  app.get('port'),
  () => console.log(`server listening on ${app.get('port')}`)
)