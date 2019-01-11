// Schemas
const ImplementationGuideSchema = require('../../schemas/implementationguide.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ImplementationGuideInput = require('../../inputs/implementationguide.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createImplementationGuide,
	updateImplementationGuide,
	removeImplementationGuide,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImplementationGuide',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ImplementationGuide record.',
	},
	resource: {
		type: new GraphQLNonNull(ImplementationGuideInput),
		description: 'ImplementationGuide Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ImplementationGuide record for deletion.',
	},
};

/**
 * @name exports.ImplementationGuideCreateMutation
 * @summary ImplementationGuideCreate mutation.
 */
module.exports.ImplementationGuideCreateMutation = {
	description: 'Create a ImplementationGuide record',
	resolve: scopeInvariant(scopeOptions, createImplementationGuide),
	type: ImplementationGuideSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImplementationGuideUpdateMutation
 * @summary ImplementationGuideUpdate mutation.
 */
module.exports.ImplementationGuideUpdateMutation = {
	description: 'Update a ImplementationGuide record',
	resolve: scopeInvariant(scopeOptions, updateImplementationGuide),
	type: ImplementationGuideSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImplementationGuideRemoveMutation
 * @summary ImplementationGuideRemove mutation.
 */
module.exports.ImplementationGuideRemoveMutation = {
	description: 'Remove a ImplementationGuide record',
	resolve: scopeInvariant(scopeOptions, removeImplementationGuide),
	type: ImplementationGuideSchema,
	args: DeleteArgs,
};
