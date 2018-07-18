const errorUtils = require('../../../../utils/error.utils');

/**
 * @name exports.auditeventResolver
 * @static
 * @summary AuditEvent Resolver.
 */
module.exports.auditeventResolver = function auditeventResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.auditeventListResolver
 * @static
 * @summary AuditEvent List Resolver.
 */
module.exports.auditeventListResolver = function auditeventListResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return [ {} ];
};

/**
 * @name exports.auditeventInstanceResolver
 * @static
 * @summary AuditEvent Instance Resolver.
 */
module.exports.auditeventInstanceResolver = function auditeventInstanceResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.auditeventCreateResolver
 * @static
 * @summary AuditEvent Create Resolver.
 */
module.exports.auditeventCreateResolver = function auditeventCreateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.auditeventUpdateResolver
 * @static
 * @summary AuditEvent Update Resolver.
 */
module.exports.auditeventUpdateResolver = function auditeventUpdateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};

/**
 * @name exports.auditeventDeleteResolver
 * @static
 * @summary AuditEvent Delete Resolver.
 */
module.exports.auditeventDeleteResolver = function auditeventDeleteResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	return {};
};
