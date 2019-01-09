// Schemas
const AuditEventSchema = require('../../schemas/auditevent.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const AuditEventInput = require('../../inputs/auditevent.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createAuditEvent,
	updateAuditEvent,
	removeAuditEvent,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AuditEvent',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a AuditEvent record.',
	},
	resource: {
		type: new GraphQLNonNull(AuditEventInput),
		description: 'AuditEvent Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a AuditEvent record for deletion.',
	},
};

/**
 * @name exports.AuditEventCreateMutation
 * @summary AuditEventCreate mutation.
 */
module.exports.AuditEventCreateMutation = {
	description: 'Create a AuditEvent record',
	resolve: scopeInvariant(scopeOptions, createAuditEvent),
	type: AuditEventSchema,
	args: WriteArgs,
};

/**
 * @name exports.AuditEventUpdateMutation
 * @summary AuditEventUpdate mutation.
 */
module.exports.AuditEventUpdateMutation = {
	description: 'Update a AuditEvent record',
	resolve: scopeInvariant(scopeOptions, updateAuditEvent),
	type: AuditEventSchema,
	args: WriteArgs,
};

/**
 * @name exports.AuditEventRemoveMutation
 * @summary AuditEventRemove mutation.
 */
module.exports.AuditEventRemoveMutation = {
	description: 'Remove a AuditEvent record',
	resolve: scopeInvariant(scopeOptions, removeAuditEvent),
	type: AuditEventSchema,
	args: DeleteArgs,
};
