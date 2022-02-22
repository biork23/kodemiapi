
const Mentor = require('../models/mentor.model')

function getAll() {
   return Mentor.find()

}

function getById (id) {
    return Mentor.findById(id)
}

function create (mentorData) {
    const newKoder = new Koder(mentorData)

const errors = newMentor.validateSync()
if(errors){
    console.log('errors:', errors)
    throw new createError(400, ' validation failed')
}

  return  newMentor.save()
}

function deleteById (id)
{
    return Mentor.findByIdAndDelete(id)
}

function updateById (id, mentorData){
    return Mentor.findByIdAndUpdate(id, mentorData)
}
module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}