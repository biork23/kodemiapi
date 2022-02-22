
const mongoose= require('mongoose')

const mentorSchema = new mongoose.Schema({
    
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    age:{
      type: Number,
      min: 1,
      max: 150,
      required: true 
    },
    nationality:{
        type: String,
        required: false
    },
    assignature:{
        type: String,
        maxlength: 10,
        require: true
    },
    sex:{
        type: String,
        enum:['m','f','x']
    },
   
})

module.exports = mongoose.model('mentors', mentorSchema)