const errorUtils = require('../../../../utils/error.utils');

/**
 * @name exports.personResolver
 * @static
 * @summary Person Resolver.
 */
module.exports.personResolver = function personResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.personListResolver
 * @static
 * @summary Person List Resolver.
 */
module.exports.personListResolver = function personListResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return [ {} ];
};

/**
 * @name exports.personInstanceResolver
 * @static
 * @summary Person Instance Resolver.
 */
module.exports.personInstanceResolver = function personInstanceResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.personCreateResolver
 * @static
 * @summary Person Create Resolver.
 */
module.exports.personCreateResolver = function personCreateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.personUpdateResolver
 * @static
 * @summary Person Update Resolver.
 */
module.exports.personUpdateResolver = function personUpdateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.personDeleteResolver
 * @static
 * @summary Person Delete Resolver.
 */
module.exports.personDeleteResolver = function personDeleteResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};
