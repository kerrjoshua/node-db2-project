const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())

server.use('/api/cars', carsRouter)

server.use('*', (req, res) => { // eslint-disable-line
    res.status(404).json({
        message: 'Failsafe not found',
    })
})
module.exports = server
