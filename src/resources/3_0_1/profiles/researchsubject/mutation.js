// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ResearchSubjectSchema = require('../../schemas/researchsubject.schema');

// Inputs
const ResearchSubjectInput = require('../../inputs/researchsubject.input');


const {
	researchsubjectCreateResolver,
	researchsubjectUpdateResolver,
	researchsubjectDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ResearchSubject record.'
	},
	resource: {
		type: ResearchSubjectInput,
		description: 'ResearchSubject Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ResearchSubject record for deletion.'
	}
};

/**
 * @name exports.ResearchSubjectCreateMutation
 * @summary ResearchSubjectCreate Mutation.
 */
module.exports.ResearchSubjectCreateMutation = {
	args: WriteArgs,
	description: 'Create a ResearchSubject',
	resolve: researchsubjectCreateResolver,
	type: ResearchSubjectSchema
};

/**
 * @name exports.ResearchSubjectUpdateMutation
 * @summary ResearchSubjectUpdate Mutation.
 */
module.exports.ResearchSubjectUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ResearchSubjects',
	resolve: researchsubjectUpdateResolver,
	type: ResearchSubjectSchema
};

/**
 * @name exports.ResearchSubjectDeleteMutation
 * @summary ResearchSubjectDelete Mutation.
 */
module.exports.ResearchSubjectDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ResearchSubject',
	resolve: researchsubjectDeleteResolver,
	type: ResearchSubjectSchema
};
