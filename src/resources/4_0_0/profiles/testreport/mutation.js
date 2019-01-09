// Schemas
const TestReportSchema = require('../../schemas/testreport.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const TestReportInput = require('../../inputs/testreport.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createTestReport,
	updateTestReport,
	removeTestReport,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'TestReport',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a TestReport record.',
	},
	resource: {
		type: new GraphQLNonNull(TestReportInput),
		description: 'TestReport Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a TestReport record for deletion.',
	},
};

/**
 * @name exports.TestReportCreateMutation
 * @summary TestReportCreate mutation.
 */
module.exports.TestReportCreateMutation = {
	description: 'Create a TestReport record',
	resolve: scopeInvariant(scopeOptions, createTestReport),
	type: TestReportSchema,
	args: WriteArgs,
};

/**
 * @name exports.TestReportUpdateMutation
 * @summary TestReportUpdate mutation.
 */
module.exports.TestReportUpdateMutation = {
	description: 'Update a TestReport record',
	resolve: scopeInvariant(scopeOptions, updateTestReport),
	type: TestReportSchema,
	args: WriteArgs,
};

/**
 * @name exports.TestReportRemoveMutation
 * @summary TestReportRemove mutation.
 */
module.exports.TestReportRemoveMutation = {
	description: 'Remove a TestReport record',
	resolve: scopeInvariant(scopeOptions, removeTestReport),
	type: TestReportSchema,
	args: DeleteArgs,
};
