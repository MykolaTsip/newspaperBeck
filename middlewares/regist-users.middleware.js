
const {userValid} = require('../validators')


const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../errors')


module.exports =  (req, res, next) => {

    let user = req.body

        if (!user) {
            return next(new ErrorHandle(
                ErrorEnum.BAD_INVALID_USER_REGISTERED.message,
                ErrorStatusEnum.UNAUTHORIZED,
                ErrorEnum.BAD_INVALID_USER_REGISTERED.customCode
            ))
        }

        let {error} = userValid.validate(user)

        if (!error) {
            return next(new ErrorHandle(
                ErrorEnum.BAD_INVALID_USER_REGISTERED.message,
                ErrorStatusEnum.UNAUTHORIZED,
                ErrorEnum.BAD_INVALID_USER_REGISTERED.customCode
            ))
        }


        next()
}
