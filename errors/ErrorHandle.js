module.exports =  class ErrorEnum extends Error {
    constructor(message, code, customCode) {
        super(message);
        this.code = code
        this.customCode = customCode

        Error.captureStackTrace(this, this.constructor)
    }
}
