// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AdverseEventSchema = require('../../schemas/adverseevent.schema');

// Inputs
const AdverseEventInput = require('../../inputs/adverseevent.input');

// Resolvers
const {
	adverseeventCreateResolver,
	adverseeventUpdateResolver,
	adverseeventDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'AdverseEvent',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a AdverseEvent record for deletion.',
	},
};

/**
 * @name exports.AdverseEventCreateMutation
 * @summary AdverseEventCreate Mutation.
 */
module.exports.AdverseEventCreateMutation = {
	args: WriteArgs,
	description: 'Create a AdverseEvent',
	resolve: scopeInvariant(scopeOptions, adverseeventCreateResolver),
	type: AdverseEventSchema,
};

/**
 * @name exports.AdverseEventUpdateMutation
 * @summary AdverseEventUpdate Mutation.
 */
module.exports.AdverseEventUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple AdverseEvents',
	resolve: scopeInvariant(scopeOptions, adverseeventUpdateResolver),
	type: AdverseEventSchema,
};

/**
 * @name exports.AdverseEventDeleteMutation
 * @summary AdverseEventDelete Mutation.
 */
module.exports.AdverseEventDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single AdverseEvent',
	resolve: scopeInvariant(scopeOptions, adverseeventDeleteResolver),
	type: AdverseEventSchema,
};
