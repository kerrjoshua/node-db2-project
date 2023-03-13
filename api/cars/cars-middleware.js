const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
    .then( car => {
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
  console.log('checkCarPayload')
  next()
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