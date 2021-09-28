const express = require('express')

const server = express()

server.get('/',(req, res) => {
    res.send('Server ok')
})

server.listen(8080)