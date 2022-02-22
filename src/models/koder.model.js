
const mongoose= require('mongoose')

const koderSchema = new mongoose.Schema({
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
    generationNumber:{
        type: Number,
        min: 1,
        required: true
    },
    hobbies:{
        type: [String],
        maxlength: 10
    },
    sex:{
        type: String,
        enum:['m','f','x']
    },
    city:{
        type: String,
  
    }

})

module.exports = mongoose.model('koder', koderSchema)