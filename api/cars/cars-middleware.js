const Cars = require('./cars-model')
const db = require('../../data/db-config')
const vinVal = require('vin-validator')

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
    .then(car => {
      if (car !== undefined) {
        req.car = car
        next()
      }
      else {
        res.status(404).json({
          message: `car with id ${req.params.id} is not found`
        })
      }
    })
    .catch(next)
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  const required = { vin: vin, make: make, model: model, mileage: mileage };
  let missing;
  for (let key in required) {
    if (!required[key]) {
      missing = key
    } 
  }
  if (missing) {    
    next({ status: 400, message: `${missing} is missing` })
  }
  else next()
}

const checkVinNumberValid = (req, res, next) => {
  const checkedVin = vinVal.validate(req.body.vin)
  if (!checkedVin) {
    next({status: 400, message: `vin ${req.body.vin} is invalid`})
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const existing = await db('cars')
      .where('vin', req.body.vin).first()
  
    if (existing) {
      next({status: 400, message: `vin ${req.body.vin} already exists`})
    } else {
      next()
    }

  }
  catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}