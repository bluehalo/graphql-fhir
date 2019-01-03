// Schemas
const AuditEventSchema = require('../../schemas/auditevent.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const AuditEventArgs = require('../../parameters/auditevent.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	auditeventResolver,
	auditeventListResolver,
	auditeventInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'AuditEvent',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.AuditEventQuery
 * @summary AuditEvent Query.
 */
module.exports.AuditEventQuery = {
	args: Object.assign({}, CommonArgs, AuditEventArgs),
	description: 'Query for a single AuditEvent',
	resolve: scopeInvariant(scopeOptions, auditeventResolver),
	type: AuditEventSchema,
};

/**
 * @name exports.AuditEventListQuery
 * @summary AuditEventList Query.
 */
module.exports.AuditEventListQuery = {
	args: Object.assign({}, CommonArgs, AuditEventArgs),
	description: 'Query for multiple AuditEvents',
	resolve: scopeInvariant(scopeOptions, auditeventListResolver),
	type: BundleSchema,
};

/**
 * @name exports.AuditEventInstanceQuery
 * @summary AuditEventInstance Query.
 */
module.exports.AuditEventInstanceQuery = {
	description: 'Get information about a single AuditEvent',
	resolve: scopeInvariant(scopeOptions, auditeventInstanceResolver),
	type: AuditEventSchema,
};
