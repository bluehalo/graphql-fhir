// Schemas
const RiskEvidenceSynthesisSchema = require('../../schemas/riskevidencesynthesis.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const RiskEvidenceSynthesisInput = require('../../inputs/riskevidencesynthesis.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createRiskEvidenceSynthesis,
	updateRiskEvidenceSynthesis,
	removeRiskEvidenceSynthesis,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RiskEvidenceSynthesis',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a RiskEvidenceSynthesis record.',
	},
	resource: {
		type: new GraphQLNonNull(RiskEvidenceSynthesisInput),
		description: 'RiskEvidenceSynthesis Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a RiskEvidenceSynthesis record for deletion.',
	},
};

/**
 * @name exports.RiskEvidenceSynthesisCreateMutation
 * @summary RiskEvidenceSynthesisCreate mutation.
 */
module.exports.RiskEvidenceSynthesisCreateMutation = {
	description: 'Create a RiskEvidenceSynthesis record',
	resolve: scopeInvariant(scopeOptions, createRiskEvidenceSynthesis),
	type: RiskEvidenceSynthesisSchema,
	args: WriteArgs,
};

/**
 * @name exports.RiskEvidenceSynthesisUpdateMutation
 * @summary RiskEvidenceSynthesisUpdate mutation.
 */
module.exports.RiskEvidenceSynthesisUpdateMutation = {
	description: 'Update a RiskEvidenceSynthesis record',
	resolve: scopeInvariant(scopeOptions, updateRiskEvidenceSynthesis),
	type: RiskEvidenceSynthesisSchema,
	args: WriteArgs,
};

/**
 * @name exports.RiskEvidenceSynthesisRemoveMutation
 * @summary RiskEvidenceSynthesisRemove mutation.
 */
module.exports.RiskEvidenceSynthesisRemoveMutation = {
	description: 'Remove a RiskEvidenceSynthesis record',
	resolve: scopeInvariant(scopeOptions, removeRiskEvidenceSynthesis),
	type: RiskEvidenceSynthesisSchema,
	args: DeleteArgs,
};
