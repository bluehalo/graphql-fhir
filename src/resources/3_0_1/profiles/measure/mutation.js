// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MeasureSchema = require('../../schemas/measure.schema');

// Inputs
const MeasureInput = require('../../inputs/measure.input');

// Resolvers
const {
	measureCreateResolver,
	measureUpdateResolver,
	measureDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Measure',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Measure record.',
	},
	resource: {
		type: new GraphQLNonNull(MeasureInput),
		description: 'Measure Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Measure record for deletion.',
	},
};

/**
 * @name exports.MeasureCreateMutation
 * @summary MeasureCreate Mutation.
 */
module.exports.MeasureCreateMutation = {
	args: WriteArgs,
	description: 'Create a Measure',
	resolve: scopeInvariant(scopeOptions, measureCreateResolver),
	type: MeasureSchema,
};

/**
 * @name exports.MeasureUpdateMutation
 * @summary MeasureUpdate Mutation.
 */
module.exports.MeasureUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Measures',
	resolve: scopeInvariant(scopeOptions, measureUpdateResolver),
	type: MeasureSchema,
};

/**
 * @name exports.MeasureDeleteMutation
 * @summary MeasureDelete Mutation.
 */
module.exports.MeasureDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Measure',
	resolve: scopeInvariant(scopeOptions, measureDeleteResolver),
	type: MeasureSchema,
};
