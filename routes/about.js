const aboutFile = require ('./content/about')
const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.writeHead(200)
        res.write(JSON.stringify(aboutFile))
        res.end()
    })
module.exports = router