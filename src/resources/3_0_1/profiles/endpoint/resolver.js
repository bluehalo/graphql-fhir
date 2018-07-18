const errorUtils = require('../../../../utils/error.utils');

/**
 * @name exports.endpointResolver
 * @static
 * @summary Endpoint Resolver.
 */
module.exports.endpointResolver = function endpointResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.endpointListResolver
 * @static
 * @summary Endpoint List Resolver.
 */
module.exports.endpointListResolver = function endpointListResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return [ {} ];
};

/**
 * @name exports.endpointInstanceResolver
 * @static
 * @summary Endpoint Instance Resolver.
 */
module.exports.endpointInstanceResolver = function endpointInstanceResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.endpointCreateResolver
 * @static
 * @summary Endpoint Create Resolver.
 */
module.exports.endpointCreateResolver = function endpointCreateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.endpointUpdateResolver
 * @static
 * @summary Endpoint Update Resolver.
 */
module.exports.endpointUpdateResolver = function endpointUpdateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.endpointDeleteResolver
 * @static
 * @summary Endpoint Delete Resolver.
 */
module.exports.endpointDeleteResolver = function endpointDeleteResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};
