// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DetectedIssueSchema = require('../../schemas/detectedissue.schema');

// Inputs
const DetectedIssueInput = require('../../inputs/detectedissue.input');

// Resolvers
const {
	detectedissueCreateResolver,
	detectedissueUpdateResolver,
	detectedissueDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DetectedIssue',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a DetectedIssue record.',
	},
	resource: {
		type: new GraphQLNonNull(DetectedIssueInput),
		description: 'DetectedIssue Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a DetectedIssue record for deletion.',
	},
};

/**
 * @name exports.DetectedIssueCreateMutation
 * @summary DetectedIssueCreate Mutation.
 */
module.exports.DetectedIssueCreateMutation = {
	args: WriteArgs,
	description: 'Create a DetectedIssue',
	resolve: scopeInvariant(scopeOptions, detectedissueCreateResolver),
	type: DetectedIssueSchema,
};

/**
 * @name exports.DetectedIssueUpdateMutation
 * @summary DetectedIssueUpdate Mutation.
 */
module.exports.DetectedIssueUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DetectedIssues',
	resolve: scopeInvariant(scopeOptions, detectedissueUpdateResolver),
	type: DetectedIssueSchema,
};

/**
 * @name exports.DetectedIssueDeleteMutation
 * @summary DetectedIssueDelete Mutation.
 */
module.exports.DetectedIssueDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DetectedIssue',
	resolve: scopeInvariant(scopeOptions, detectedissueDeleteResolver),
	type: DetectedIssueSchema,
};
