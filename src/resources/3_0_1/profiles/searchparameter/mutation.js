// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SearchParameterSchema = require('../../schemas/searchparameter.schema');

// Inputs
const SearchParameterInput = require('../../inputs/searchparameter.input');

// Resolvers
const {
	searchparameterCreateResolver,
	searchparameterUpdateResolver,
	searchparameterDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'SearchParameter',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a SearchParameter record.',
	},
	resource: {
		type: new GraphQLNonNull(SearchParameterInput),
		description: 'SearchParameter Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a SearchParameter record for deletion.',
	},
};

/**
 * @name exports.SearchParameterCreateMutation
 * @summary SearchParameterCreate Mutation.
 */
module.exports.SearchParameterCreateMutation = {
	args: WriteArgs,
	description: 'Create a SearchParameter',
	resolve: scopeInvariant(scopeOptions, searchparameterCreateResolver),
	type: SearchParameterSchema,
};

/**
 * @name exports.SearchParameterUpdateMutation
 * @summary SearchParameterUpdate Mutation.
 */
module.exports.SearchParameterUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple SearchParameters',
	resolve: scopeInvariant(scopeOptions, searchparameterUpdateResolver),
	type: SearchParameterSchema,
};

/**
 * @name exports.SearchParameterDeleteMutation
 * @summary SearchParameterDelete Mutation.
 */
module.exports.SearchParameterDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single SearchParameter',
	resolve: scopeInvariant(scopeOptions, searchparameterDeleteResolver),
	type: SearchParameterSchema,
};
