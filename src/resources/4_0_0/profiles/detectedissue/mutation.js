// Schemas
const DetectedIssueSchema = require('../../schemas/detectedissue.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DetectedIssueInput = require('../../inputs/detectedissue.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDetectedIssue,
	updateDetectedIssue,
	removeDetectedIssue,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DetectedIssue',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
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
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DetectedIssue record for deletion.',
	},
};

/**
 * @name exports.DetectedIssueCreateMutation
 * @summary DetectedIssueCreate mutation.
 */
module.exports.DetectedIssueCreateMutation = {
	description: 'Create a DetectedIssue record',
	resolve: scopeInvariant(scopeOptions, createDetectedIssue),
	type: DetectedIssueSchema,
	args: WriteArgs,
};

/**
 * @name exports.DetectedIssueUpdateMutation
 * @summary DetectedIssueUpdate mutation.
 */
module.exports.DetectedIssueUpdateMutation = {
	description: 'Update a DetectedIssue record',
	resolve: scopeInvariant(scopeOptions, updateDetectedIssue),
	type: DetectedIssueSchema,
	args: WriteArgs,
};

/**
 * @name exports.DetectedIssueRemoveMutation
 * @summary DetectedIssueRemove mutation.
 */
module.exports.DetectedIssueRemoveMutation = {
	description: 'Remove a DetectedIssue record',
	resolve: scopeInvariant(scopeOptions, removeDetectedIssue),
	type: DetectedIssueSchema,
	args: DeleteArgs,
};
