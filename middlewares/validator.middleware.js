const { validationResult } = require('express-validator');
const debug = require("debug")("saludplus-api:validator");

const runValidation = (req, res, next) => {
const error = validationResult(req);
if (!error.isEmpty()) {
    debug("Error de validación", error);
    return res.status(400).json({
    error: error.array().map((item)=>item.msg),
    });
}
next()
};

module.exports = runValidation;