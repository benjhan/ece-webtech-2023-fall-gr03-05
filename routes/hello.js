const express = require('express')
const router = express.Router()

router
    .get('/Theo', (req, res) => {
        res.send("Hello, my name is Theophile and I am an ECE student")
    })
    .get('/:name', (req, res) => {
        console.log(req.params)
        res.send("Hello " + req.params.name)
    })
module.exports = router