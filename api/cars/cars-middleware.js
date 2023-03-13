const Cars = require('./cars-model')

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
  console.log('checkVinNumberValid')
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  console.log('checkVinNumberUnique')
  next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}