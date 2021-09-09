const express = require('express')

const app = express()

const { config } = require('./config/index')

app.get('/year/:year', function(req, res) {
    let year = req.params.year
    if (year.length < 4) {
        res.send("Please, type a year that's 4 digits to know if its a leap-year")
    } else {
        if (year % 4 === 0) {
            res.send(`${year} it's a leap-year, so it has 366 days. :D`)
        } else {
            res.send(`${year} it's not a leap-year, so it has 365 days. :D`)
        }

    }
})

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`)

})