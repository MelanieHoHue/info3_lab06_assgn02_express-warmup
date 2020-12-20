//https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>  {
    res.send('MeHoHue´s lab06-assgn02-ExpressWarmup!')
})

//https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// a change to test if node_modules get ignored within th enext commit 