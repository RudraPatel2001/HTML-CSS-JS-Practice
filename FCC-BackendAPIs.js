// ***** FreeCodeCamp - Backend APIs - Project 1 *****

// const express = require('express')
// const app = express()

// app.use(express.json())

// app.get("/api", (req, res) => {
//     res.json({
//         unix: (new Date()).getTime(),
//         utc: (new Date()).toUTCString()
//     })
// })

// app.get("/api/:date", (req, res) => {
//     const date = req.params.date;

//     if ((new Date(parseInt(date)).toString()) === "Invalid Date") {
//         res.json({ error: "Invalid Date" })
//         return;
//     }

//     if (date.indexOf('-') == -1 && date.indexOf(" ") == -1 && (new Date(parseInt(date))).getTime() === parseInt(date)) {
//         res.json({
//             unix: parseInt(date),
//             utc: (new Date(parseInt(date))).toUTCString()
//         })
//     } else {
//         res.json({
//             unix: (new Date(date)).getTime(),
//             utc: (new Date(date)).toUTCString()
//         })
//     }
// })

// app.listen(5000)

// ***** FreeCodeCamp - Backend APIs - Project 2 *****

// const express = require('express')
// const app = express()

// app.use(express.json())

// app.get("/api/whoami", (req, res) => {
//     res.json({
//         ipaddress: req.headers['x-forwarded-for'],
//         language: req.headers['accept-language'],
//         software: req.headers['user-agent']
//     })
// })

// app.listen(5000)

// ***** FreeCodeCamp - Backend APIs - Project 3 *****

const express = require('express')
const app = express()

app.use(express.json())



app.listen(5000)