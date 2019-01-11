// Schemas
const ExpansionProfileSchema = require('../../schemas/expansionprofile.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ExpansionProfileInput = require('../../inputs/expansionprofile.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createExpansionProfile,
	updateExpansionProfile,
	removeExpansionProfile,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ExpansionProfile',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ExpansionProfile record.',
	},
	resource: {
		type: new GraphQLNonNull(ExpansionProfileInput),
		description: 'ExpansionProfile Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ExpansionProfile record for deletion.',
	},
};

/**
 * @name exports.ExpansionProfileCreateMutation
 * @summary ExpansionProfileCreate mutation.
 */
module.exports.ExpansionProfileCreateMutation = {
	description: 'Create a ExpansionProfile record',
	resolve: scopeInvariant(scopeOptions, createExpansionProfile),
	type: ExpansionProfileSchema,
	args: WriteArgs,
};

/**
 * @name exports.ExpansionProfileUpdateMutation
 * @summary ExpansionProfileUpdate mutation.
 */
module.exports.ExpansionProfileUpdateMutation = {
	description: 'Update a ExpansionProfile record',
	resolve: scopeInvariant(scopeOptions, updateExpansionProfile),
	type: ExpansionProfileSchema,
	args: WriteArgs,
};

/**
 * @name exports.ExpansionProfileRemoveMutation
 * @summary ExpansionProfileRemove mutation.
 */
module.exports.ExpansionProfileRemoveMutation = {
	description: 'Remove a ExpansionProfile record',
	resolve: scopeInvariant(scopeOptions, removeExpansionProfile),
	type: ExpansionProfileSchema,
	args: DeleteArgs,
};
