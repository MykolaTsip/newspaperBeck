const jwt = require('jsonwebtoken')

const {tokenConf} = require('../configs')


module.exports = () => {
    const access_token = jwt.sign({a: 'abc'}, tokenConf.ACCESS_TOKEN, {expiresIn: '55m'})
    const refresh_token = jwt.sign({bc: 1234}, tokenConf.REFRESH_TOKEN, {expiresIn: '15d'})

    return {
        access_token,
        refresh_token
    }
}
