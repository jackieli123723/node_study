
class AppError extends Error{
    constructor(cfg) {
        if(typeof(cfg) === 'string'){
            cfg = {name: cfg};
        }
        cfg = Object.assign({},{
            name: 'AppError',
            message: 'unknown',
            info: null
        },cfg);
        // console.log(cfg);
        super(cfg.message);
        this.name = cfg.name;
        this.message = cfg.message; 
        this.info = cfg.info;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else { 
            this.stack = (new Error(message)).stack; 
        }
    }
}

module.exports = {AppError};