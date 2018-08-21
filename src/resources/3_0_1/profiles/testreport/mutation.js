// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const TestReportSchema = require('../../schemas/testreport.schema');

// Inputs
const TestReportInput = require('../../inputs/testreport.input');

// Resolvers
const {
	testreportCreateResolver,
	testreportUpdateResolver,
	testreportDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'TestReport',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a TestReport record.'
	},
	resource: {
		type: new GraphQLNonNull(TestReportInput),
		description: 'TestReport Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a TestReport record for deletion.'
	}
};

/**
 * @name exports.TestReportCreateMutation
 * @summary TestReportCreate Mutation.
 */
module.exports.TestReportCreateMutation = {
	args: WriteArgs,
	description: 'Create a TestReport',
	resolve: scopeInvariant(scopeOptions, testreportCreateResolver),
	type: TestReportSchema
};

/**
 * @name exports.TestReportUpdateMutation
 * @summary TestReportUpdate Mutation.
 */
module.exports.TestReportUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple TestReports',
	resolve: scopeInvariant(scopeOptions, testreportUpdateResolver),
	type: TestReportSchema
};

/**
 * @name exports.TestReportDeleteMutation
 * @summary TestReportDelete Mutation.
 */
module.exports.TestReportDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single TestReport',
	resolve: scopeInvariant(scopeOptions, testreportDeleteResolver),
	type: TestReportSchema
};
