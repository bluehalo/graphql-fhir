// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const RiskAssessmentSchema = require('../../schemas/riskassessment.schema');

// Inputs
const RiskAssessmentInput = require('../../inputs/riskassessment.input');


const {
	riskassessmentCreateResolver,
	riskassessmentUpdateResolver,
	riskassessmentDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a RiskAssessment record.'
	},
	resource: {
		type: RiskAssessmentInput,
		description: 'RiskAssessment Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a RiskAssessment record for deletion.'
	}
};

/**
 * @name exports.RiskAssessmentCreateMutation
 * @summary RiskAssessmentCreate Mutation.
 */
module.exports.RiskAssessmentCreateMutation = {
	args: WriteArgs,
	description: 'Create a RiskAssessment',
	resolve: riskassessmentCreateResolver,
	type: RiskAssessmentSchema
};

/**
 * @name exports.RiskAssessmentUpdateMutation
 * @summary RiskAssessmentUpdate Mutation.
 */
module.exports.RiskAssessmentUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple RiskAssessments',
	resolve: riskassessmentUpdateResolver,
	type: RiskAssessmentSchema
};

/**
 * @name exports.RiskAssessmentDeleteMutation
 * @summary RiskAssessmentDelete Mutation.
 */
module.exports.RiskAssessmentDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single RiskAssessment',
	resolve: riskassessmentDeleteResolver,
	type: RiskAssessmentSchema
};
