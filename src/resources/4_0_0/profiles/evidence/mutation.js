// Schemas
const EvidenceSchema = require('../../schemas/evidence.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EvidenceInput = require('../../inputs/evidence.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEvidence,
	updateEvidence,
	removeEvidence,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Evidence',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Evidence record.',
	},
	resource: {
		type: new GraphQLNonNull(EvidenceInput),
		description: 'Evidence Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Evidence record for deletion.',
	},
};

/**
 * @name exports.EvidenceCreateMutation
 * @summary EvidenceCreate mutation.
 */
module.exports.EvidenceCreateMutation = {
	description: 'Create a Evidence record',
	resolve: scopeInvariant(scopeOptions, createEvidence),
	type: EvidenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.EvidenceUpdateMutation
 * @summary EvidenceUpdate mutation.
 */
module.exports.EvidenceUpdateMutation = {
	description: 'Update a Evidence record',
	resolve: scopeInvariant(scopeOptions, updateEvidence),
	type: EvidenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.EvidenceRemoveMutation
 * @summary EvidenceRemove mutation.
 */
module.exports.EvidenceRemoveMutation = {
	description: 'Remove a Evidence record',
	resolve: scopeInvariant(scopeOptions, removeEvidence),
	type: EvidenceSchema,
	args: DeleteArgs,
};
