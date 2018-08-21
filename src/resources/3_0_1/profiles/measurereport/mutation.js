// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MeasureReportSchema = require('../../schemas/measurereport.schema');

// Inputs
const MeasureReportInput = require('../../inputs/measurereport.input');

// Resolvers
const {
	measurereportCreateResolver,
	measurereportUpdateResolver,
	measurereportDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MeasureReport',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MeasureReport record.'
	},
	resource: {
		type: new GraphQLNonNull(MeasureReportInput),
		description: 'MeasureReport Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, measurereportCreateResolver),
	type: MeasureReportSchema
};

/**
 * @name exports.MeasureReportUpdateMutation
 * @summary MeasureReportUpdate Mutation.
 */
module.exports.MeasureReportUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MeasureReports',
	resolve: scopeInvariant(scopeOptions, measurereportUpdateResolver),
	type: MeasureReportSchema
};

/**
 * @name exports.MeasureReportDeleteMutation
 * @summary MeasureReportDelete Mutation.
 */
module.exports.MeasureReportDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MeasureReport',
	resolve: scopeInvariant(scopeOptions, measurereportDeleteResolver),
	type: MeasureReportSchema
};
