class ExpressError extends Error {
    consttructor(message, statusCode) {
        // super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;