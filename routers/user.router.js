const {Router} = require('express')

const {userController, tokenSetting} = require('../controllers')

const {loginUsersMiddleware, accessTokenMiddleware, registUserMiddleware} = require('../middlewares')

const userRouter = Router()

userRouter.get('/', accessTokenMiddleware, userController.validAccess)
userRouter.post('/create', registUserMiddleware, userController.CreateUser)
userRouter.post('/login', loginUsersMiddleware, userController.LoginUser)
userRouter.delete('/delete/:id', accessTokenMiddleware, userController.DeleteUser)
userRouter.delete('/exit', accessTokenMiddleware, tokenSetting.DeleteTokens)

module.exports = userRouter
