const express = require('express')
const app = express()

app.use(express.json())

app.get('/api', (_, res) => {
    res.json({
        unix: (new Date()).getTime(),
        utc: (new Date()).toUTCString()
    })
})

app.get('/api/:date', (req, res) => {
    const date = req.params.date;

    if ((new Date(parseInt(date)).toString()) === "Invalid Date") {
        res.json({ error: "Invalid Date" })
    }

    if (date.includes('-')) {