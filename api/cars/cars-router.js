const express = require('express')
const router = express.Router()
const md = require('./cars-middleware')
const Cars = require('./cars-model')

router.get('/', async (req, res, next) => {
    try { 
        const cars = await Cars.getAll()
        res.json(cars)
        
    } catch (err) {
        next(err)
    }
})
router.get('/:id', md.checkCarId, async (req, res) => {
        res.json(req.car)   
    
})
router.post('/', md.checkCarPayload, md.checkVinNumberValid, md.checkVinNumberUnique, async (req, res, next) => {
    try { 
        const car = req.body
        const [id] = await Cars.create(req.body)
        car.id = id
        res.json(car)        

    } catch (err) {
        next(err)
    }
})
router.use('*', (err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router