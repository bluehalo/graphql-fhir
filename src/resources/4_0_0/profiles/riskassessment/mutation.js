// Schemas
const RiskAssessmentSchema = require('../../schemas/riskassessment.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const RiskAssessmentInput = require('../../inputs/riskassessment.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createRiskAssessment,
	updateRiskAssessment,
	removeRiskAssessment,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RiskAssessment',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a RiskAssessment record.',
	},
	resource: {
		type: new GraphQLNonNull(RiskAssessmentInput),
		description: 'RiskAssessment Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a RiskAssessment record for deletion.',
	},
};

/**
 * @name exports.RiskAssessmentCreateMutation
 * @summary RiskAssessmentCreate mutation.
 */
module.exports.RiskAssessmentCreateMutation = {
	description: 'Create a RiskAssessment record',
	resolve: scopeInvariant(scopeOptions, createRiskAssessment),
	type: RiskAssessmentSchema,
	args: WriteArgs,
};

/**
 * @name exports.RiskAssessmentUpdateMutation
 * @summary RiskAssessmentUpdate mutation.
 */
module.exports.RiskAssessmentUpdateMutation = {
	description: 'Update a RiskAssessment record',
	resolve: scopeInvariant(scopeOptions, updateRiskAssessment),
	type: RiskAssessmentSchema,
	args: WriteArgs,
};

/**
 * @name exports.RiskAssessmentRemoveMutation
 * @summary RiskAssessmentRemove mutation.
 */
module.exports.RiskAssessmentRemoveMutation = {
	description: 'Remove a RiskAssessment record',
	resolve: scopeInvariant(scopeOptions, removeRiskAssessment),
	type: RiskAssessmentSchema,
	args: DeleteArgs,
};
