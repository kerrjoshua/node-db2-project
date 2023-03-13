
const db = require('../../data/db-config')

exports.getAll =  () => {
  return db('cars')
}

exports.getById = () => {
  console.log('getById')
}

exports.create = () => {
  console.log('create')
}
