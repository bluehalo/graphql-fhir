// Schemas
const SearchParameterSchema = require('../../schemas/searchparameter.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SearchParameterInput = require('../../inputs/searchparameter.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSearchParameter,
	updateSearchParameter,
	removeSearchParameter,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SearchParameter',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
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
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a SearchParameter record for deletion.',
	},
};

/**
 * @name exports.SearchParameterCreateMutation
 * @summary SearchParameterCreate mutation.
 */
module.exports.SearchParameterCreateMutation = {
	description: 'Create a SearchParameter record',
	resolve: scopeInvariant(scopeOptions, createSearchParameter),
	type: SearchParameterSchema,
	args: WriteArgs,
};

/**
 * @name exports.SearchParameterUpdateMutation
 * @summary SearchParameterUpdate mutation.
 */
module.exports.SearchParameterUpdateMutation = {
	description: 'Update a SearchParameter record',
	resolve: scopeInvariant(scopeOptions, updateSearchParameter),
	type: SearchParameterSchema,
	args: WriteArgs,
};

/**
 * @name exports.SearchParameterRemoveMutation
 * @summary SearchParameterRemove mutation.
 */
module.exports.SearchParameterRemoveMutation = {
	description: 'Remove a SearchParameter record',
	resolve: scopeInvariant(scopeOptions, removeSearchParameter),
	type: SearchParameterSchema,
	args: DeleteArgs,
};
