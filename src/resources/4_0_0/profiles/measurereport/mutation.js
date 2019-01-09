// Schemas
const MeasureReportSchema = require('../../schemas/measurereport.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MeasureReportInput = require('../../inputs/measurereport.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMeasureReport,
	updateMeasureReport,
	removeMeasureReport,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MeasureReport',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MeasureReport record.',
	},
	resource: {
		type: new GraphQLNonNull(MeasureReportInput),
		description: 'MeasureReport Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MeasureReport record for deletion.',
	},
};

/**
 * @name exports.MeasureReportCreateMutation
 * @summary MeasureReportCreate mutation.
 */
module.exports.MeasureReportCreateMutation = {
	description: 'Create a MeasureReport record',
	resolve: scopeInvariant(scopeOptions, createMeasureReport),
	type: MeasureReportSchema,
	args: WriteArgs,
};

/**
 * @name exports.MeasureReportUpdateMutation
 * @summary MeasureReportUpdate mutation.
 */
module.exports.MeasureReportUpdateMutation = {
	description: 'Update a MeasureReport record',
	resolve: scopeInvariant(scopeOptions, updateMeasureReport),
	type: MeasureReportSchema,
	args: WriteArgs,
};

/**
 * @name exports.MeasureReportRemoveMutation
 * @summary MeasureReportRemove mutation.
 */
module.exports.MeasureReportRemoveMutation = {
	description: 'Remove a MeasureReport record',
	resolve: scopeInvariant(scopeOptions, removeMeasureReport),
	type: MeasureReportSchema,
	args: DeleteArgs,
};
