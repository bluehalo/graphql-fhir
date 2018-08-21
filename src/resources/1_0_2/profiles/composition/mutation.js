// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CompositionSchema = require('../../schemas/composition.schema');

// Inputs
const CompositionInput = require('../../inputs/composition.input');

// Resolvers
const {
	compositionCreateResolver,
	compositionUpdateResolver,
	compositionDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Composition',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Composition record.'
	},
	resource: {
		type: new GraphQLNonNull(CompositionInput),
		description: 'Composition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Composition record for deletion.'
	}
};

/**
 * @name exports.CompositionCreateMutation
 * @summary CompositionCreate Mutation.
 */
module.exports.CompositionCreateMutation = {
	args: WriteArgs,
	description: 'Create a Composition',
	resolve: scopeInvariant(scopeOptions, compositionCreateResolver),
	type: CompositionSchema
};

/**
 * @name exports.CompositionUpdateMutation
 * @summary CompositionUpdate Mutation.
 */
module.exports.CompositionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Compositions',
	resolve: scopeInvariant(scopeOptions, compositionUpdateResolver),
	type: CompositionSchema
};

/**
 * @name exports.CompositionDeleteMutation
 * @summary CompositionDelete Mutation.
 */
module.exports.CompositionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Composition',
	resolve: scopeInvariant(scopeOptions, compositionDeleteResolver),
	type: CompositionSchema
};
