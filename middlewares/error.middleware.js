/*
Una forma de manejar los errores en Express 
es utilizando un middleware para el manejo 
de errores durante el procesamiento de solicitudes. */
const debug = require('debug')('saludplus-api:error');
const errorHandler = (err, req, res, next) => {
	// Error handling goes here
    debug(err);
    return res.status(err.status || 500).json({ message: err.message });
}
module.exports = { errorHandler };