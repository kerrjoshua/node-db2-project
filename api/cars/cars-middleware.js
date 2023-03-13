const checkCarId = (req, res, next) => {
  console.log('checkCarId')
  next()
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