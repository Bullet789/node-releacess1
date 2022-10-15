const express = require('express')
const app = express()
const port = 2500


app.get('/', (req, res) => {
    res.send('welcome, nice to meet you user, yes of course!')
})

app.listen(port, () => {
    console.log(`Example listening to http://localhost:${port}`)
})



