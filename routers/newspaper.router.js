const {Router} = require('express')

const {newspaperController} = require('../controllers')
const {accessTokenMiddleware} = require('../middlewares')

const newspaperRouter = Router()

newspaperRouter.post('/create', accessTokenMiddleware,  newspaperController.CreateNews)
newspaperRouter.get('/newsToUser', accessTokenMiddleware, newspaperController.GetAllNewsOfUser)
newspaperRouter.delete(`/delete/:id`, accessTokenMiddleware, newspaperController.DeleteUserNews)
newspaperRouter.get('/update/:title/:id', accessTokenMiddleware, newspaperController.UpdateTitleNews)

module.exports = newspaperRouter
