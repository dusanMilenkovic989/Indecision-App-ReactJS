const path = require('path')
const express = require('express')

const port = process.env.PORT || 3000
const app = express()

const publicPath = path.join(__dirname, '../public')
const notFoundPath = path.join(__dirname, '../public/index.html')

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(notFoundPath)
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})