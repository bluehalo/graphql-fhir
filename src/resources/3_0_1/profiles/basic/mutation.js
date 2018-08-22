// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const BasicSchema = require('../../schemas/basic.schema');

// Inputs
const BasicInput = require('../../inputs/basic.input');

// Resolvers
const {
	basicCreateResolver,
	basicUpdateResolver,
	basicDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Basic',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Basic record.'
	},
	resource: {
		type: new GraphQLNonNull(BasicInput),
		description: 'Basic Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Basic record for deletion.'
	}
};

/**
 * @name exports.BasicCreateMutation
 * @summary BasicCreate Mutation.
 */
module.exports.BasicCreateMutation = {
	args: WriteArgs,
	description: 'Create a Basic',
	resolve: scopeInvariant(scopeOptions, basicCreateResolver),
	type: BasicSchema
};

/**
 * @name exports.BasicUpdateMutation
 * @summary BasicUpdate Mutation.
 */
module.exports.BasicUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Basics',
	resolve: scopeInvariant(scopeOptions, basicUpdateResolver),
	type: BasicSchema
};

/**
 * @name exports.BasicDeleteMutation
 * @summary BasicDelete Mutation.
 */
module.exports.BasicDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Basic',
	resolve: scopeInvariant(scopeOptions, basicDeleteResolver),
	type: BasicSchema
};
