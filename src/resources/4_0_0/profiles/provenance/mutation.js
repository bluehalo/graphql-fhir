// Schemas
const ProvenanceSchema = require('../../schemas/provenance.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ProvenanceInput = require('../../inputs/provenance.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createProvenance,
	updateProvenance,
	removeProvenance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Provenance',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Provenance record.',
	},
	resource: {
		type: new GraphQLNonNull(ProvenanceInput),
		description: 'Provenance Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Provenance record for deletion.',
	},
};

/**
 * @name exports.ProvenanceCreateMutation
 * @summary ProvenanceCreate mutation.
 */
module.exports.ProvenanceCreateMutation = {
	description: 'Create a Provenance record',
	resolve: scopeInvariant(scopeOptions, createProvenance),
	type: ProvenanceSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProvenanceUpdateMutation
 * @summary ProvenanceUpdate mutation.
 */
module.exports.ProvenanceUpdateMutation = {
	description: 'Update a Provenance record',
	resolve: scopeInvariant(scopeOptions, updateProvenance),
	type: ProvenanceSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProvenanceRemoveMutation
 * @summary ProvenanceRemove mutation.
 */
module.exports.ProvenanceRemoveMutation = {
	description: 'Remove a Provenance record',
	resolve: scopeInvariant(scopeOptions, removeProvenance),
	type: ProvenanceSchema,
	args: DeleteArgs,
};
