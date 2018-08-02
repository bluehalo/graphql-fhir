// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const TestReportSchema = require('../../schemas/testreport.schema');

// Inputs
const TestReportInput = require('../../inputs/testreport.input');


const {
	testreportCreateResolver,
	testreportUpdateResolver,
	testreportDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a TestReport record.'
	},
	resource: {
		type: TestReportInput,
		description: 'TestReport Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: testreportCreateResolver,
	type: TestReportSchema
};

/**
 * @name exports.TestReportUpdateMutation
 * @summary TestReportUpdate Mutation.
 */
module.exports.TestReportUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple TestReports',
	resolve: testreportUpdateResolver,
	type: TestReportSchema
};

/**
 * @name exports.TestReportDeleteMutation
 * @summary TestReportDelete Mutation.
 */
module.exports.TestReportDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single TestReport',
	resolve: testreportDeleteResolver,
	type: TestReportSchema
};
