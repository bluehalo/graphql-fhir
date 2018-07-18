// Schemas
const AuditEventSchema = require('../../schemas/auditevent.schema');

// Arguments
const AuditEventArgs = require('../../parameters/auditevent.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	auditeventResolver,
	auditeventListResolver,
	auditeventInstanceResolver
} = require('./resolver');

/**
 * @name exports.AuditEventQuery
 * @summary AuditEvent Query.
 */
module.exports.AuditEventQuery = {
	args: Object.assign({}, CommonArgs, AuditEventArgs),
	description: 'Query for a single AuditEvent',
	resolve: auditeventResolver,
	type: AuditEventSchema
};

/**
 * @name exports.AuditEventListQuery
 * @summary AuditEventList Query.
 */
module.exports.AuditEventListQuery = {
	args: Object.assign({}, CommonArgs, AuditEventArgs),
	description: 'Query for multiple AuditEvents',
	resolve: auditeventListResolver,
	type: new GraphQLList(AuditEventSchema)
};

/**
 * @name exports.AuditEventInstanceQuery
 * @summary AuditEventInstance Query.
 */
module.exports.AuditEventInstanceQuery = {
	description: 'Get information about a single AuditEvent',
	resolve: auditeventInstanceResolver,
	type: AuditEventSchema
};
