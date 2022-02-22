
const express = require('express')
const createError = require('http-errors')
const auth = require('../middlewares/auth.middleware')

const koders = require('../usecases/koder.usecase')

const router = express.Router()

router.use(auth)



// /koders

//GET /koders

router.get('/', async (request, response) => {
    
        
    const allKoders = await koders.getAll()
        response.json({
            ok:true,
            koders: allKoders
    
        })
   
})
//GET /koder/:id
router.get('/:id', async (request, response) => {
    
        
        const koderFound = await koders.getById(request.params.id)
        if(!koderFound){
        //    const error = new Error('Koder not found')
        //    error.status = 404
           throw new createError(404, 'koder not found' )
        }

        response.json({
            ok: true,
            koders: koderFound
        })
   
})

router.delete('/:id', async (request, response) => {

    const koderDeleted = await koders.deleteById(request.params.id)

    response.json({
         ok: true,
         koders: koderDeleted
    })
   
})

router.post('/', async (request, response) => {

    const koderCreated = await koders.create(request.body)
        response.json({
            ok: true,
            message: 'Koder created'
        })
    
 })

router.patch('/:id', async (request, response) => {

    const newKoderData = request.body
    const koderUpdated = await koders.updateById(request.params.id, newKoderData)
        response.json({
            ok: true,
            koders: koderUpdated
        })

    
})

module.exports = router
