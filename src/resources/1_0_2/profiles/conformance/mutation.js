// Schemas
const ConformanceSchema = require('../../schemas/conformance.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ConformanceInput = require('../../inputs/conformance.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createConformance,
	updateConformance,
	removeConformance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Conformance',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Conformance record.',
	},
	resource: {
		type: new GraphQLNonNull(ConformanceInput),
		description: 'Conformance Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Conformance record for deletion.',
	},
};

/**
 * @name exports.ConformanceCreateMutation
 * @summary ConformanceCreate mutation.
 */
module.exports.ConformanceCreateMutation = {
	description: 'Create a Conformance record',
	resolve: scopeInvariant(scopeOptions, createConformance),
	type: ConformanceSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConformanceUpdateMutation
 * @summary ConformanceUpdate mutation.
 */
module.exports.ConformanceUpdateMutation = {
	description: 'Update a Conformance record',
	resolve: scopeInvariant(scopeOptions, updateConformance),
	type: ConformanceSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConformanceRemoveMutation
 * @summary ConformanceRemove mutation.
 */
module.exports.ConformanceRemoveMutation = {
	description: 'Remove a Conformance record',
	resolve: scopeInvariant(scopeOptions, removeConformance),
	type: ConformanceSchema,
	args: DeleteArgs,
};
