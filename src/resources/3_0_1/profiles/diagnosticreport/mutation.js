// Schemas
const DiagnosticReportSchema = require('../../schemas/diagnosticreport.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DiagnosticReportInput = require('../../inputs/diagnosticreport.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDiagnosticReport,
	updateDiagnosticReport,
	removeDiagnosticReport,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DiagnosticReport',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DiagnosticReport record.',
	},
	resource: {
		type: new GraphQLNonNull(DiagnosticReportInput),
		description: 'DiagnosticReport Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DiagnosticReport record for deletion.',
	},
};

/**
 * @name exports.DiagnosticReportCreateMutation
 * @summary DiagnosticReportCreate mutation.
 */
module.exports.DiagnosticReportCreateMutation = {
	description: 'Create a DiagnosticReport record',
	resolve: scopeInvariant(scopeOptions, createDiagnosticReport),
	type: DiagnosticReportSchema,
	args: WriteArgs,
};

/**
 * @name exports.DiagnosticReportUpdateMutation
 * @summary DiagnosticReportUpdate mutation.
 */
module.exports.DiagnosticReportUpdateMutation = {
	description: 'Update a DiagnosticReport record',
	resolve: scopeInvariant(scopeOptions, updateDiagnosticReport),
	type: DiagnosticReportSchema,
	args: WriteArgs,
};

/**
 * @name exports.DiagnosticReportRemoveMutation
 * @summary DiagnosticReportRemove mutation.
 */
module.exports.DiagnosticReportRemoveMutation = {
	description: 'Remove a DiagnosticReport record',
	resolve: scopeInvariant(scopeOptions, removeDiagnosticReport),
	type: DiagnosticReportSchema,
	args: DeleteArgs,
};
