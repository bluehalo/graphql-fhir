const noopMiddleware = require('./noop.middleware');
const passport = require('passport');

/**
 * @name exports
 * @summary Middleware function for authentication
 */
module.exports = function authenticationMiddleware(server) {
	let auth = (server && server.config && server.config.auth) || {};
	let env = server && server.env;

	return env && env.AUTHENTICATION
		? passport.authenticate(auth.name, auth.passportOptions)
		: noopMiddleware;
};
