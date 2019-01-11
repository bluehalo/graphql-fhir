// Schemas
const AdverseEventSchema = require('../../schemas/adverseevent.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const AdverseEventInput = require('../../inputs/adverseevent.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createAdverseEvent,
	updateAdverseEvent,
	removeAdverseEvent,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AdverseEvent',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a AdverseEvent record.',
	},
	resource: {
		type: new GraphQLNonNull(AdverseEventInput),
		description: 'AdverseEvent Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a AdverseEvent record for deletion.',
	},
};

/**
 * @name exports.AdverseEventCreateMutation
 * @summary AdverseEventCreate mutation.
 */
module.exports.AdverseEventCreateMutation = {
	description: 'Create a AdverseEvent record',
	resolve: scopeInvariant(scopeOptions, createAdverseEvent),
	type: AdverseEventSchema,
	args: WriteArgs,
};

/**
 * @name exports.AdverseEventUpdateMutation
 * @summary AdverseEventUpdate mutation.
 */
module.exports.AdverseEventUpdateMutation = {
	description: 'Update a AdverseEvent record',
	resolve: scopeInvariant(scopeOptions, updateAdverseEvent),
	type: AdverseEventSchema,
	args: WriteArgs,
};

/**
 * @name exports.AdverseEventRemoveMutation
 * @summary AdverseEventRemove mutation.
 */
module.exports.AdverseEventRemoveMutation = {
	description: 'Remove a AdverseEvent record',
	resolve: scopeInvariant(scopeOptions, removeAdverseEvent),
	type: AdverseEventSchema,
	args: DeleteArgs,
};
