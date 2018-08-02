// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ResearchStudySchema = require('../../schemas/researchstudy.schema');

// Inputs
const ResearchStudyInput = require('../../inputs/researchstudy.input');


const {
	researchstudyCreateResolver,
	researchstudyUpdateResolver,
	researchstudyDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ResearchStudy record.'
	},
	resource: {
		type: ResearchStudyInput,
		description: 'ResearchStudy Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ResearchStudy record for deletion.'
	}
};

/**
 * @name exports.ResearchStudyCreateMutation
 * @summary ResearchStudyCreate Mutation.
 */
module.exports.ResearchStudyCreateMutation = {
	args: WriteArgs,
	description: 'Create a ResearchStudy',
	resolve: researchstudyCreateResolver,
	type: ResearchStudySchema
};

/**
 * @name exports.ResearchStudyUpdateMutation
 * @summary ResearchStudyUpdate Mutation.
 */
module.exports.ResearchStudyUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ResearchStudys',
	resolve: researchstudyUpdateResolver,
	type: ResearchStudySchema
};

/**
 * @name exports.ResearchStudyDeleteMutation
 * @summary ResearchStudyDelete Mutation.
 */
module.exports.ResearchStudyDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ResearchStudy',
	resolve: researchstudyDeleteResolver,
	type: ResearchStudySchema
};
