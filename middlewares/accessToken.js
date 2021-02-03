const jwt = require('jsonwebtoken')


const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../errors')
const {CONSTANTS, tokenConf} = require('../configs')
const {tokens, userService} = require('../services')

module.exports = async (req, res, next) => {
    const token = req.get(CONSTANTS.AUTHORIZATION)

    const {access_token, user_id} = await tokens.getTokenByParams({access_token: token})

    const {activate} = await  userService.getOneUserByParams({id: user_id})

    if (!access_token && !activate) {
        return next(new ErrorHandle(
            ErrorEnum.UNAUTHORIZED_BAD_TOKEN.message,
            ErrorStatusEnum.UNAUTHORIZED,
            ErrorEnum.UNAUTHORIZED_BAD_TOKEN.customCode
        ))
    }


    await jwt.verify(access_token, tokenConf.ACCESS_TOKEN, err => {
        if (err) {
            return next(new ErrorHandle(
                ErrorEnum.UNAUTHORIZED_BAD_TOKEN.message,
                ErrorStatusEnum.UNAUTHORIZED,
                ErrorEnum.UNAUTHORIZED_BAD_TOKEN.customCode
            ))
        }
    })


    req.user_id = user_id

    next()
}
