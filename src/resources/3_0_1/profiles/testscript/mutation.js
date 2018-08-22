// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const TestScriptSchema = require('../../schemas/testscript.schema');

// Inputs
const TestScriptInput = require('../../inputs/testscript.input');

// Resolvers
const {
	testscriptCreateResolver,
	testscriptUpdateResolver,
	testscriptDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'TestScript',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a TestScript record.'
	},
	resource: {
		type: new GraphQLNonNull(TestScriptInput),
		description: 'TestScript Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a TestScript record for deletion.'
	}
};

/**
 * @name exports.TestScriptCreateMutation
 * @summary TestScriptCreate Mutation.
 */
module.exports.TestScriptCreateMutation = {
	args: WriteArgs,
	description: 'Create a TestScript',
	resolve: scopeInvariant(scopeOptions, testscriptCreateResolver),
	type: TestScriptSchema
};

/**
 * @name exports.TestScriptUpdateMutation
 * @summary TestScriptUpdate Mutation.
 */
module.exports.TestScriptUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple TestScripts',
	resolve: scopeInvariant(scopeOptions, testscriptUpdateResolver),
	type: TestScriptSchema
};

/**
 * @name exports.TestScriptDeleteMutation
 * @summary TestScriptDelete Mutation.
 */
module.exports.TestScriptDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single TestScript',
	resolve: scopeInvariant(scopeOptions, testscriptDeleteResolver),
	type: TestScriptSchema
};
