/**
 * @name exports
 * @summary Noop Middleware function
 * @example
 * route.use(auth.enabled ? authMiddleware : noopMiddleware)
 */
module.exports = function noopMiddleware (req, res, next) {
	return next();
};
