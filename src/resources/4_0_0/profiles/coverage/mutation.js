// Schemas
const CoverageSchema = require('../../schemas/coverage.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CoverageInput = require('../../inputs/coverage.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCoverage,
	updateCoverage,
	removeCoverage,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Coverage',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Coverage record.',
	},
	resource: {
		type: new GraphQLNonNull(CoverageInput),
		description: 'Coverage Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Coverage record for deletion.',
	},
};

/**
 * @name exports.CoverageCreateMutation
 * @summary CoverageCreate mutation.
 */
module.exports.CoverageCreateMutation = {
	description: 'Create a Coverage record',
	resolve: scopeInvariant(scopeOptions, createCoverage),
	type: CoverageSchema,
	args: WriteArgs,
};

/**
 * @name exports.CoverageUpdateMutation
 * @summary CoverageUpdate mutation.
 */
module.exports.CoverageUpdateMutation = {
	description: 'Update a Coverage record',
	resolve: scopeInvariant(scopeOptions, updateCoverage),
	type: CoverageSchema,
	args: WriteArgs,
};

/**
 * @name exports.CoverageRemoveMutation
 * @summary CoverageRemove mutation.
 */
module.exports.CoverageRemoveMutation = {
	description: 'Remove a Coverage record',
	resolve: scopeInvariant(scopeOptions, removeCoverage),
	type: CoverageSchema,
	args: DeleteArgs,
};
