// Schemas
const CapabilityStatementSchema = require('../../schemas/capabilitystatement.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CapabilityStatementInput = require('../../inputs/capabilitystatement.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCapabilityStatement,
	updateCapabilityStatement,
	removeCapabilityStatement,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CapabilityStatement',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a CapabilityStatement record.',
	},
	resource: {
		type: new GraphQLNonNull(CapabilityStatementInput),
		description: 'CapabilityStatement Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CapabilityStatement record for deletion.',
	},
};

/**
 * @name exports.CapabilityStatementCreateMutation
 * @summary CapabilityStatementCreate mutation.
 */
module.exports.CapabilityStatementCreateMutation = {
	description: 'Create a CapabilityStatement record',
	resolve: scopeInvariant(scopeOptions, createCapabilityStatement),
	type: CapabilityStatementSchema,
	args: WriteArgs,
};

/**
 * @name exports.CapabilityStatementUpdateMutation
 * @summary CapabilityStatementUpdate mutation.
 */
module.exports.CapabilityStatementUpdateMutation = {
	description: 'Update a CapabilityStatement record',
	resolve: scopeInvariant(scopeOptions, updateCapabilityStatement),
	type: CapabilityStatementSchema,
	args: WriteArgs,
};

/**
 * @name exports.CapabilityStatementRemoveMutation
 * @summary CapabilityStatementRemove mutation.
 */
module.exports.CapabilityStatementRemoveMutation = {
	description: 'Remove a CapabilityStatement record',
	resolve: scopeInvariant(scopeOptions, removeCapabilityStatement),
	type: CapabilityStatementSchema,
	args: DeleteArgs,
};
