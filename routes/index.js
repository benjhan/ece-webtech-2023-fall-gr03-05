const express = require('express')
const router = express.Router()

router
  .get('/', function (req, res) {
    res.writeHead(200)
    res.write("Hello I am GET")
    res.end()
  })
  .post('/', (req, res) => {
    res.send("Hello I am POST")
  })
  .put('/', function (req, res) {
    // PUT
  })
  .delete('/', (req, res) => {
    // DELETE
  })

  
module.exports = router;