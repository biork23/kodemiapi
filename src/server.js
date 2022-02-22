//Definir el servidor

const express = require('express')
const cors = require('cors')

const loggerMiddleware = require('./middlewares/logger.middleware')
const errorHandler = require('./middlewares/errorHandler.middleware')

const kodersRouters = require('./routes/koder.router')
const mentorsRouters = require('./routes/mentor.router')
const userRouters = require('./routes/user.router')
const authRouter = require('./routes/auth.router')

const app = express()
app.use(cors())
app.use(express.json())
app.use(loggerMiddleware)
app.use(errorHandler)



app.use('/koders', kodersRouters)
app.use('/mentors', mentorsRouters)
app.use('/users', userRouters)
app.use('/auth', authRouter)


app.get('/', (request, response) => {
    console.log('user:', request.user)
    response.json({
        ok: true,
        message: 'KodemiaAPIv1'
    })
})



module.exports = app