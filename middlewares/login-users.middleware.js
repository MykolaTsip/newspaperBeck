const {userService} = require('../services')
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../errors')

module.exports = async (req, res, next) => {
    const user = req.body

    if (!user) {
        return next(new ErrorHandle(
            ErrorEnum.NOT_FOUND.message,
            ErrorStatusEnum.UNAUTHORIZED,
            ErrorEnum.NOT_FOUND.customCode
        ))
    }

    const dbUser = await userService.getOneUserByParams({login: user.login})

    if (!dbUser) {
        return next(new ErrorHandle(
            ErrorEnum.NOT_FOUND.message,
            ErrorStatusEnum.UNAUTHORIZED,
            ErrorEnum.NOT_FOUND.customCode
        ))
    }

    req.user = dbUser
    next()
}
