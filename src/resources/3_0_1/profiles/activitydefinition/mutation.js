// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ActivityDefinitionSchema = require('../../schemas/activitydefinition.schema');

// Inputs
const ActivityDefinitionInput = require('../../inputs/activitydefinition.input');

// Resolvers
const {
	activitydefinitionCreateResolver,
	activitydefinitionUpdateResolver,
	activitydefinitionDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ActivityDefinition',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ActivityDefinition record.'
	},
	resource: {
		type: new GraphQLNonNull(ActivityDefinitionInput),
		description: 'ActivityDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ActivityDefinition record for deletion.'
	}
};

/**
 * @name exports.ActivityDefinitionCreateMutation
 * @summary ActivityDefinitionCreate Mutation.
 */
module.exports.ActivityDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a ActivityDefinition',
	resolve: scopeInvariant(scopeOptions, activitydefinitionCreateResolver),
	type: ActivityDefinitionSchema
};

/**
 * @name exports.ActivityDefinitionUpdateMutation
 * @summary ActivityDefinitionUpdate Mutation.
 */
module.exports.ActivityDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ActivityDefinitions',
	resolve: scopeInvariant(scopeOptions, activitydefinitionUpdateResolver),
	type: ActivityDefinitionSchema
};

/**
 * @name exports.ActivityDefinitionDeleteMutation
 * @summary ActivityDefinitionDelete Mutation.
 */
module.exports.ActivityDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ActivityDefinition',
	resolve: scopeInvariant(scopeOptions, activitydefinitionDeleteResolver),
	type: ActivityDefinitionSchema
};
