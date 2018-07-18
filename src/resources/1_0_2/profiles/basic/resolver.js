const errorUtils = require('../../../../utils/error.utils');

/**
 * @name exports.basicResolver
 * @static
 * @summary Basic Resolver.
 */
module.exports.basicResolver = function basicResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.basicListResolver
 * @static
 * @summary Basic List Resolver.
 */
module.exports.basicListResolver = function basicListResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return [ {} ];
};

/**
 * @name exports.basicInstanceResolver
 * @static
 * @summary Basic Instance Resolver.
 */
module.exports.basicInstanceResolver = function basicInstanceResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.basicCreateResolver
 * @static
 * @summary Basic Create Resolver.
 */
module.exports.basicCreateResolver = function basicCreateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.basicUpdateResolver
 * @static
 * @summary Basic Update Resolver.
 */
module.exports.basicUpdateResolver = function basicUpdateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.basicDeleteResolver
 * @static
 * @summary Basic Delete Resolver.
 */
module.exports.basicDeleteResolver = function basicDeleteResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};
