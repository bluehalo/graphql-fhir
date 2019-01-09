// Schemas
const TestScriptSchema = require('../../schemas/testscript.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const TestScriptInput = require('../../inputs/testscript.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createTestScript,
	updateTestScript,
	removeTestScript,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'TestScript',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a TestScript record.',
	},
	resource: {
		type: new GraphQLNonNull(TestScriptInput),
		description: 'TestScript Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a TestScript record for deletion.',
	},
};

/**
 * @name exports.TestScriptCreateMutation
 * @summary TestScriptCreate mutation.
 */
module.exports.TestScriptCreateMutation = {
	description: 'Create a TestScript record',
	resolve: scopeInvariant(scopeOptions, createTestScript),
	type: TestScriptSchema,
	args: WriteArgs,
};

/**
 * @name exports.TestScriptUpdateMutation
 * @summary TestScriptUpdate mutation.
 */
module.exports.TestScriptUpdateMutation = {
	description: 'Update a TestScript record',
	resolve: scopeInvariant(scopeOptions, updateTestScript),
	type: TestScriptSchema,
	args: WriteArgs,
};

/**
 * @name exports.TestScriptRemoveMutation
 * @summary TestScriptRemove mutation.
 */
module.exports.TestScriptRemoveMutation = {
	description: 'Remove a TestScript record',
	resolve: scopeInvariant(scopeOptions, removeTestScript),
	type: TestScriptSchema,
	args: DeleteArgs,
};
