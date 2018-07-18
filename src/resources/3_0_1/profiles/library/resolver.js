const errorUtils = require('../../../../utils/error.utils');

/**
 * @name exports.libraryResolver
 * @static
 * @summary Library Resolver.
 */
module.exports.libraryResolver = function libraryResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.libraryListResolver
 * @static
 * @summary Library List Resolver.
 */
module.exports.libraryListResolver = function libraryListResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return [ {} ];
};

/**
 * @name exports.libraryInstanceResolver
 * @static
 * @summary Library Instance Resolver.
 */
module.exports.libraryInstanceResolver = function libraryInstanceResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.libraryCreateResolver
 * @static
 * @summary Library Create Resolver.
 */
module.exports.libraryCreateResolver = function libraryCreateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.libraryUpdateResolver
 * @static
 * @summary Library Update Resolver.
 */
module.exports.libraryUpdateResolver = function libraryUpdateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.libraryDeleteResolver
 * @static
 * @summary Library Delete Resolver.
 */
module.exports.libraryDeleteResolver = function libraryDeleteResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};
