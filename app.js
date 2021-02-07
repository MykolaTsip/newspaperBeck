const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')


const {userRouter,  newspaperRouter} = require('./routers')

const server = express()

dotenv.config({})



server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use(cors({methods: 'POST', origin: (origin, callback) => {
    if (['http://localhost:4200'].indexOf(origin) !== -1) {
        callback(null, true)
    }
    else {
        logger.err('not allowed by CORS')
        callback(new Error('not allowed by CORS'))
    }
    }}))


server.use('/users', userRouter)
server.use('/newspaper', newspaperRouter)

server.use('*', (err, req, res, next) => {
    res.status(err.status)
        .json({
            message: err.message,
            code: err.customCode
        })
})

module.exports = {server}
