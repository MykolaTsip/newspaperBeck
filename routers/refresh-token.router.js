const {Router} = require('express')

const {refreshTokenController} = require('../controllers')

const refreshRouter = Router()

module.exports = refreshRouter.post('/refresh',  refreshTokenController)
