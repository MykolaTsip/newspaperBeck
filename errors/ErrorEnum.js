module.exports = {
    // 400
    BAD_INVALID_USER_REGISTERED: {
        message: 'invalid user data',
        customCode: 4003
    },
    BAD_REQUEST_USER_ACTIVATED: {
        message: 'User is already activated',
        customCode: 4002
    },

    BAD_REQUEST_NO_TOKEN: {
        message: 'Token is not present',
        customCode: 4003
    },

    BAD_REQUEST_ZAKLAD_REGISTER: {
        message: 'invalid zaklad data',
        customCode: 4000
    },


    UNAUTHORIZED_BAD_TOKEN: {
        message: 'Something wrong with token',
        customCode: 4003
    },


    FORBIDDEN_USER_NOT_CONFIRMED: {
        message: 'User is not confirmed',
        customCode: 4031
    },

    // 404
    NOT_FOUND: {
        message: 'Record not found',
        customCode: 4004
    }
}
