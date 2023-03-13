const express = require('express')
const router = express.Router()
const md = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try { 
        res.json('get cars')
        
    } catch (err) {
        next(err)
    }
})
router.get('/:id', md.checkCarId,   async (req, res, next) => {
    try { 
        res.json('get car by id')
        

    } catch (err) {
        next(err)
    }
})
router.post('/', md.checkCarPayload, md.checkVinNumberValid, md.checkVinNumberUnique, async (req, res, next) => {
    try { 
        res.json('post car')
        

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