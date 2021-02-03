const {Router} = require('express')

const {newspaperController} = require('../controllers')
const {accessTokenMiddleware} = require('../middlewares')

const newspaperRouter = Router()

newspaperRouter.get('/all', accessTokenMiddleware,  newspaperController.AllNews)

module.exports = newspaperRouter
