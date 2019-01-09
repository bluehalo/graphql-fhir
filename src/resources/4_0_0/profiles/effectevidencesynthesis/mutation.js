// Schemas
const EffectEvidenceSynthesisSchema = require('../../schemas/effectevidencesynthesis.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EffectEvidenceSynthesisInput = require('../../inputs/effectevidencesynthesis.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEffectEvidenceSynthesis,
	updateEffectEvidenceSynthesis,
	removeEffectEvidenceSynthesis,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EffectEvidenceSynthesis',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EffectEvidenceSynthesis record.',
	},
	resource: {
		type: new GraphQLNonNull(EffectEvidenceSynthesisInput),
		description: 'EffectEvidenceSynthesis Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EffectEvidenceSynthesis record for deletion.',
	},
};

/**
 * @name exports.EffectEvidenceSynthesisCreateMutation
 * @summary EffectEvidenceSynthesisCreate mutation.
 */
module.exports.EffectEvidenceSynthesisCreateMutation = {
	description: 'Create a EffectEvidenceSynthesis record',
	resolve: scopeInvariant(scopeOptions, createEffectEvidenceSynthesis),
	type: EffectEvidenceSynthesisSchema,
	args: WriteArgs,
};

/**
 * @name exports.EffectEvidenceSynthesisUpdateMutation
 * @summary EffectEvidenceSynthesisUpdate mutation.
 */
module.exports.EffectEvidenceSynthesisUpdateMutation = {
	description: 'Update a EffectEvidenceSynthesis record',
	resolve: scopeInvariant(scopeOptions, updateEffectEvidenceSynthesis),
	type: EffectEvidenceSynthesisSchema,
	args: WriteArgs,
};

/**
 * @name exports.EffectEvidenceSynthesisRemoveMutation
 * @summary EffectEvidenceSynthesisRemove mutation.
 */
module.exports.EffectEvidenceSynthesisRemoveMutation = {
	description: 'Remove a EffectEvidenceSynthesis record',
	resolve: scopeInvariant(scopeOptions, removeEffectEvidenceSynthesis),
	type: EffectEvidenceSynthesisSchema,
	args: DeleteArgs,
};
