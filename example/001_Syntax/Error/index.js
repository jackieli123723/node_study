
class AppError extends Error{
    constructor(message = 'Error', info = {}) {
        super(message);
        this.name = this.constructor.name;
        this.message = message; 
        this.info = info;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else { 
            this.stack = (new Error(message)).stack; 
        }
    }
}

module.exports = {AppError};