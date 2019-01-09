// Schemas
const ValueSetSchema = require('../../schemas/valueset.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ValueSetInput = require('../../inputs/valueset.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createValueSet,
	updateValueSet,
	removeValueSet,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ValueSet',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a ValueSet record.',
	},
	resource: {
		type: new GraphQLNonNull(ValueSetInput),
		description: 'ValueSet Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ValueSet record for deletion.',
	},
};

/**
 * @name exports.ValueSetCreateMutation
 * @summary ValueSetCreate mutation.
 */
module.exports.ValueSetCreateMutation = {
	description: 'Create a ValueSet record',
	resolve: scopeInvariant(scopeOptions, createValueSet),
	type: ValueSetSchema,
	args: WriteArgs,
};

/**
 * @name exports.ValueSetUpdateMutation
 * @summary ValueSetUpdate mutation.
 */
module.exports.ValueSetUpdateMutation = {
	description: 'Update a ValueSet record',
	resolve: scopeInvariant(scopeOptions, updateValueSet),
	type: ValueSetSchema,
	args: WriteArgs,
};

/**
 * @name exports.ValueSetRemoveMutation
 * @summary ValueSetRemove mutation.
 */
module.exports.ValueSetRemoveMutation = {
	description: 'Remove a ValueSet record',
	resolve: scopeInvariant(scopeOptions, removeValueSet),
	type: ValueSetSchema,
	args: DeleteArgs,
};
