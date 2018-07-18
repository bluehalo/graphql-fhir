// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ClinicalImpressionSchema = require('../../schemas/clinicalimpression.schema');

// Inputs
const ClinicalImpressionInput = require('../../inputs/clinicalimpression.input');


const {
	clinicalimpressionCreateResolver,
	clinicalimpressionUpdateResolver,
	clinicalimpressionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ClinicalImpression record.'
	},
	resource: {
		type: ClinicalImpressionInput,
		description: 'ClinicalImpression Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ClinicalImpression record for deletion.'
	}
};

/**
 * @name exports.ClinicalImpressionCreateMutation
 * @summary ClinicalImpressionCreate Mutation.
 */
module.exports.ClinicalImpressionCreateMutation = {
	args: WriteArgs,
	description: 'Create a ClinicalImpression',
	resolve: clinicalimpressionCreateResolver,
	type: ClinicalImpressionSchema
};

/**
 * @name exports.ClinicalImpressionUpdateMutation
 * @summary ClinicalImpressionUpdate Mutation.
 */
module.exports.ClinicalImpressionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ClinicalImpressions',
	resolve: clinicalimpressionUpdateResolver,
	type: ClinicalImpressionSchema
};

/**
 * @name exports.ClinicalImpressionDeleteMutation
 * @summary ClinicalImpressionDelete Mutation.
 */
module.exports.ClinicalImpressionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ClinicalImpression',
	resolve: clinicalimpressionDeleteResolver,
	type: ClinicalImpressionSchema
};
