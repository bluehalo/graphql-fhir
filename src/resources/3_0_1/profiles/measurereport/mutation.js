// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MeasureReportSchema = require('../../schemas/measurereport.schema');

// Inputs
const MeasureReportInput = require('../../inputs/measurereport.input');


const {
	measurereportCreateResolver,
	measurereportUpdateResolver,
	measurereportDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MeasureReport record.'
	},
	resource: {
		type: MeasureReportInput,
		description: 'MeasureReport Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a MeasureReport record for deletion.'
	}
};

/**
 * @name exports.MeasureReportCreateMutation
 * @summary MeasureReportCreate Mutation.
 */
module.exports.MeasureReportCreateMutation = {
	args: WriteArgs,
	description: 'Create a MeasureReport',
	resolve: measurereportCreateResolver,
	type: MeasureReportSchema
};

/**
 * @name exports.MeasureReportUpdateMutation
 * @summary MeasureReportUpdate Mutation.
 */
module.exports.MeasureReportUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MeasureReports',
	resolve: measurereportUpdateResolver,
	type: MeasureReportSchema
};

/**
 * @name exports.MeasureReportDeleteMutation
 * @summary MeasureReportDelete Mutation.
 */
module.exports.MeasureReportDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MeasureReport',
	resolve: measurereportDeleteResolver,
	type: MeasureReportSchema
};
