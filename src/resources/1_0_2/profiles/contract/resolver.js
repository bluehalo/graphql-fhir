const errorUtils = require('../../../../utils/error.utils');

/**
 * @name exports.contractResolver
 * @static
 * @summary Contract Resolver.
 */
module.exports.contractResolver = function contractResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.contractListResolver
 * @static
 * @summary Contract List Resolver.
 */
module.exports.contractListResolver = function contractListResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return [ {} ];
};

/**
 * @name exports.contractInstanceResolver
 * @static
 * @summary Contract Instance Resolver.
 */
module.exports.contractInstanceResolver = function contractInstanceResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.contractCreateResolver
 * @static
 * @summary Contract Create Resolver.
 */
module.exports.contractCreateResolver = function contractCreateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.contractUpdateResolver
 * @static
 * @summary Contract Update Resolver.
 */
module.exports.contractUpdateResolver = function contractUpdateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.contractDeleteResolver
 * @static
 * @summary Contract Delete Resolver.
 */
module.exports.contractDeleteResolver = function contractDeleteResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};
