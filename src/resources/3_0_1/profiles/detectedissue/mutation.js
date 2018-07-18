// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DetectedIssueSchema = require('../../schemas/detectedissue.schema');

// Inputs
const DetectedIssueInput = require('../../inputs/detectedissue.input');


const {
	detectedissueCreateResolver,
	detectedissueUpdateResolver,
	detectedissueDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DetectedIssue record.'
	},
	resource: {
		type: DetectedIssueInput,
		description: 'DetectedIssue Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DetectedIssue record for deletion.'
	}
};

/**
 * @name exports.DetectedIssueCreateMutation
 * @summary DetectedIssueCreate Mutation.
 */
module.exports.DetectedIssueCreateMutation = {
	args: WriteArgs,
	description: 'Create a DetectedIssue',
	resolve: detectedissueCreateResolver,
	type: DetectedIssueSchema
};

/**
 * @name exports.DetectedIssueUpdateMutation
 * @summary DetectedIssueUpdate Mutation.
 */
module.exports.DetectedIssueUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DetectedIssues',
	resolve: detectedissueUpdateResolver,
	type: DetectedIssueSchema
};

/**
 * @name exports.DetectedIssueDeleteMutation
 * @summary DetectedIssueDelete Mutation.
 */
module.exports.DetectedIssueDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DetectedIssue',
	resolve: detectedissueDeleteResolver,
	type: DetectedIssueSchema
};
