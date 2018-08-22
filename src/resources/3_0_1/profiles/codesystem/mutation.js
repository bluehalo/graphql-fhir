// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CodeSystemSchema = require('../../schemas/codesystem.schema');

// Inputs
const CodeSystemInput = require('../../inputs/codesystem.input');

// Resolvers
const {
	codesystemCreateResolver,
	codesystemUpdateResolver,
	codesystemDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CodeSystem',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CodeSystem record.'
	},
	resource: {
		type: new GraphQLNonNull(CodeSystemInput),
		description: 'CodeSystem Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a CodeSystem record for deletion.'
	}
};

/**
 * @name exports.CodeSystemCreateMutation
 * @summary CodeSystemCreate Mutation.
 */
module.exports.CodeSystemCreateMutation = {
	args: WriteArgs,
	description: 'Create a CodeSystem',
	resolve: scopeInvariant(scopeOptions, codesystemCreateResolver),
	type: CodeSystemSchema
};

/**
 * @name exports.CodeSystemUpdateMutation
 * @summary CodeSystemUpdate Mutation.
 */
module.exports.CodeSystemUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CodeSystems',
	resolve: scopeInvariant(scopeOptions, codesystemUpdateResolver),
	type: CodeSystemSchema
};

/**
 * @name exports.CodeSystemDeleteMutation
 * @summary CodeSystemDelete Mutation.
 */
module.exports.CodeSystemDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CodeSystem',
	resolve: scopeInvariant(scopeOptions, codesystemDeleteResolver),
	type: CodeSystemSchema
};
