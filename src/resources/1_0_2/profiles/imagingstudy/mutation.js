// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImagingStudySchema = require('../../schemas/imagingstudy.schema');

// Inputs
const ImagingStudyInput = require('../../inputs/imagingstudy.input');


const {
	imagingstudyCreateResolver,
	imagingstudyUpdateResolver,
	imagingstudyDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ImagingStudy record.'
	},
	resource: {
		type: ImagingStudyInput,
		description: 'ImagingStudy Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ImagingStudy record for deletion.'
	}
};

/**
 * @name exports.ImagingStudyCreateMutation
 * @summary ImagingStudyCreate Mutation.
 */
module.exports.ImagingStudyCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImagingStudy',
	resolve: imagingstudyCreateResolver,
	type: ImagingStudySchema
};

/**
 * @name exports.ImagingStudyUpdateMutation
 * @summary ImagingStudyUpdate Mutation.
 */
module.exports.ImagingStudyUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImagingStudys',
	resolve: imagingstudyUpdateResolver,
	type: ImagingStudySchema
};

/**
 * @name exports.ImagingStudyDeleteMutation
 * @summary ImagingStudyDelete Mutation.
 */
module.exports.ImagingStudyDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImagingStudy',
	resolve: imagingstudyDeleteResolver,
	type: ImagingStudySchema
};
