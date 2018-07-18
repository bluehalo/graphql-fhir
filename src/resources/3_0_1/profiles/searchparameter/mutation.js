// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SearchParameterSchema = require('../../schemas/searchparameter.schema');

// Inputs
const SearchParameterInput = require('../../inputs/searchparameter.input');


const {
	searchparameterCreateResolver,
	searchparameterUpdateResolver,
	searchparameterDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a SearchParameter record.'
	},
	resource: {
		type: SearchParameterInput,
		description: 'SearchParameter Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a SearchParameter record for deletion.'
	}
};

/**
 * @name exports.SearchParameterCreateMutation
 * @summary SearchParameterCreate Mutation.
 */
module.exports.SearchParameterCreateMutation = {
	args: WriteArgs,
	description: 'Create a SearchParameter',
	resolve: searchparameterCreateResolver,
	type: SearchParameterSchema
};

/**
 * @name exports.SearchParameterUpdateMutation
 * @summary SearchParameterUpdate Mutation.
 */
module.exports.SearchParameterUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple SearchParameters',
	resolve: searchparameterUpdateResolver,
	type: SearchParameterSchema
};

/**
 * @name exports.SearchParameterDeleteMutation
 * @summary SearchParameterDelete Mutation.
 */
module.exports.SearchParameterDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single SearchParameter',
	resolve: searchparameterDeleteResolver,
	type: SearchParameterSchema
};
