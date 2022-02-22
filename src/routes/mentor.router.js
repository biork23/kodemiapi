

const express = require('express')

const mentors = require('../usecases/mentor.usecase')

const router = express.Router()

// /mentors

//GET /mentors

router.get('/',(request, response, next) => {
    console.log('Middleware de ruta Get:',request.originalUrl)
    next()
}, async (request, response) => {
    try {
        
        const allmentors = await mentors.getAll()
        response.json({
            ok:true,
            mentors: allmentors
    
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            message: error.message
        })
    }

})
//GET /mentors/:id
router.get('/:id', async (request, response) => {
    try {
        
        const mentorFound = await mentors.getById(request.params.id)
        if(!mentorFound){
           const error = new Error('mentor not found')
           error.status = 404
           throw error
        }

        response.json({
            ok: true,
            montors: mentorFound
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok:false,
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const mentorDeleted = await mentors.deleteById(request.params.id)

        response.json({
            ok: true,
            mentors: mentorDeleted
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok:false,
            message: error.message
        })

        
    }
})

router.post('/', async (request, response) => {
    try {
        const mentorCreated = await mentors.create(request.body)
        response.json({
            ok: true,
            message: 'Mentor created'
        })
    
     } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok:false,
            message: error.message
        })
    }
 })

router.patch('/:id', async (request, response) => {
    try {
        const newMentorData = request.body
        const mentorUpdated = await mentors.updateById(request.params.id, newMentorData)
        response.json({
            ok:true,
            mentors: mentorUpdated
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

module.exports = router
