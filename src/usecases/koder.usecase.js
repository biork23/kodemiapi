const createError = require('http-errors')
const Koder = require('../models/koder.model')

function getAll() {
   return Koder.find()

}

function getById (id) {
    return Koder.findById(id)
}

function create (koderData) {
    const newKoder = new Koder(koderData)

const errors = newKoder.validateSync()
if(errors){
    console.log('errors:', errors)
    throw new createError(400, ' validation failed')
}

  return  newKoder.save()
}

function deleteById (id)
{
    return Koder.findByIdAndDelete(id)
}

function updateById (id, koderData) {
    return Koder.findByIdAndUpdate(id, koderData)
}
module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}