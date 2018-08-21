const noopMiddleware = require('./noop.middleware');
const passport = require('passport');

/**
 * @name exports
 * @summary Middleware function for authentication
 */
module.exports = function authenticationMiddleware (serverConfig) {
	let auth = serverConfig && serverConfig.auth || {};

	return auth.enabled
		? passport.authenticate(auth.name, auth.passportOptions)
		: noopMiddleware;
};
