// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CoverageSchema = require('../../schemas/coverage.schema');

// Inputs
const CoverageInput = require('../../inputs/coverage.input');

// Resolvers
const {
	coverageCreateResolver,
	coverageUpdateResolver,
	coverageDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Coverage',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Coverage record.',
	},
	resource: {
		type: new GraphQLNonNull(CoverageInput),
		description: 'Coverage Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Coverage record for deletion.',
	},
};

/**
 * @name exports.CoverageCreateMutation
 * @summary CoverageCreate Mutation.
 */
module.exports.CoverageCreateMutation = {
	args: WriteArgs,
	description: 'Create a Coverage',
	resolve: scopeInvariant(scopeOptions, coverageCreateResolver),
	type: CoverageSchema,
};

/**
 * @name exports.CoverageUpdateMutation
 * @summary CoverageUpdate Mutation.
 */
module.exports.CoverageUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Coverages',
	resolve: scopeInvariant(scopeOptions, coverageUpdateResolver),
	type: CoverageSchema,
};

/**
 * @name exports.CoverageDeleteMutation
 * @summary CoverageDelete Mutation.
 */
module.exports.CoverageDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Coverage',
	resolve: scopeInvariant(scopeOptions, coverageDeleteResolver),
	type: CoverageSchema,
};
