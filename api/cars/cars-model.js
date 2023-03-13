
const db = require('../../data/db-config')

exports.getAll =  () => {
  return db('cars')
}

exports.getById = (id) => {
  return db('cars').where('id',id).first()
}

exports.create = () => {
  console.log('create')
}
