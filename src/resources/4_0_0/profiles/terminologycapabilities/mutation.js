// Schemas
const TerminologyCapabilitiesSchema = require('../../schemas/terminologycapabilities.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const TerminologyCapabilitiesInput = require('../../inputs/terminologycapabilities.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createTerminologyCapabilities,
	updateTerminologyCapabilities,
	removeTerminologyCapabilities,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'TerminologyCapabilities',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a TerminologyCapabilities record.',
	},
	resource: {
		type: new GraphQLNonNull(TerminologyCapabilitiesInput),
		description: 'TerminologyCapabilities Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a TerminologyCapabilities record for deletion.',
	},
};

/**
 * @name exports.TerminologyCapabilitiesCreateMutation
 * @summary TerminologyCapabilitiesCreate mutation.
 */
module.exports.TerminologyCapabilitiesCreateMutation = {
	description: 'Create a TerminologyCapabilities record',
	resolve: scopeInvariant(scopeOptions, createTerminologyCapabilities),
	type: TerminologyCapabilitiesSchema,
	args: WriteArgs,
};

/**
 * @name exports.TerminologyCapabilitiesUpdateMutation
 * @summary TerminologyCapabilitiesUpdate mutation.
 */
module.exports.TerminologyCapabilitiesUpdateMutation = {
	description: 'Update a TerminologyCapabilities record',
	resolve: scopeInvariant(scopeOptions, updateTerminologyCapabilities),
	type: TerminologyCapabilitiesSchema,
	args: WriteArgs,
};

/**
 * @name exports.TerminologyCapabilitiesRemoveMutation
 * @summary TerminologyCapabilitiesRemove mutation.
 */
module.exports.TerminologyCapabilitiesRemoveMutation = {
	description: 'Remove a TerminologyCapabilities record',
	resolve: scopeInvariant(scopeOptions, removeTerminologyCapabilities),
	type: TerminologyCapabilitiesSchema,
	args: DeleteArgs,
};
