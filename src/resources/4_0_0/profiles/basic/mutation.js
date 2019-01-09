// Schemas
const BasicSchema = require('../../schemas/basic.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const BasicInput = require('../../inputs/basic.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createBasic, updateBasic, removeBasic } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Basic',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Basic record.',
	},
	resource: {
		type: new GraphQLNonNull(BasicInput),
		description: 'Basic Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Basic record for deletion.',
	},
};

/**
 * @name exports.BasicCreateMutation
 * @summary BasicCreate mutation.
 */
module.exports.BasicCreateMutation = {
	description: 'Create a Basic record',
	resolve: scopeInvariant(scopeOptions, createBasic),
	type: BasicSchema,
	args: WriteArgs,
};

/**
 * @name exports.BasicUpdateMutation
 * @summary BasicUpdate mutation.
 */
module.exports.BasicUpdateMutation = {
	description: 'Update a Basic record',
	resolve: scopeInvariant(scopeOptions, updateBasic),
	type: BasicSchema,
	args: WriteArgs,
};

/**
 * @name exports.BasicRemoveMutation
 * @summary BasicRemove mutation.
 */
module.exports.BasicRemoveMutation = {
	description: 'Remove a Basic record',
	resolve: scopeInvariant(scopeOptions, removeBasic),
	type: BasicSchema,
	args: DeleteArgs,
};
