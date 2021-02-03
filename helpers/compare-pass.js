const bcrypt = require('bcrypt')
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../errors')

module.exports = (pass, heshPass) => {
  let isPass = bcrypt.compare(pass, heshPass)

    if (!isPass) {
      throw new ErrorHandle(
          ErrorEnum.BAD_INVALID_USER_REGISTERED.message,
          ErrorStatusEnum.UNAUTHORIZED,
          ErrorEnum.BAD_INVALID_USER_REGISTERED.customCode
      )
    }

    return isPass
}
