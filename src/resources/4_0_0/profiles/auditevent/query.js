// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const AuditEventSchema = require('../../schemas/auditevent.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const AuditEventArgs = require('../../parameters/auditevent.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, AuditEventArgs);

// Resolvers
const {
	getAuditEvent,
	getAuditEventList,
	getAuditEventInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AuditEvent',
	action: 'read',
};

/**
 * @name exports.AuditEventQuery
 * @summary AuditEvent query.
 */
module.exports.AuditEventQuery = {
	description: 'Query for a single AuditEvent',
	resolve: scopeInvariant(scopeOptions, getAuditEvent),
	type: AuditEventSchema,
	args: args,
};

/**
 * @name exports.AuditEventListQuery
 * @summary AuditEvent query.
 */
module.exports.AuditEventListQuery = {
	description: 'Query for a more than or just one AuditEvent',
	resolve: scopeInvariant(scopeOptions, getAuditEventList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.AuditEventInstanceQuery
 * @summary AuditEvent query.
 */
module.exports.AuditEventInstanceQuery = {
	description: 'Access information about a single AuditEvent',
	resolve: scopeInvariant(scopeOptions, getAuditEventInstance),
	type: AuditEventSchema,
	args: args,
};
