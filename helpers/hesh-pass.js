const bcrypt = require('bcrypt')


module.exports = (pass) => {
return bcrypt.hash(pass, 10)
}
