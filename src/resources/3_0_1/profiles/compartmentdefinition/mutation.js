// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CompartmentDefinitionSchema = require('../../schemas/compartmentdefinition.schema');

// Inputs
const CompartmentDefinitionInput = require('../../inputs/compartmentdefinition.input');

// Resolvers
const {
	compartmentdefinitionCreateResolver,
	compartmentdefinitionUpdateResolver,
	compartmentdefinitionDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CompartmentDefinition',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CompartmentDefinition record.'
	},
	resource: {
		type: new GraphQLNonNull(CompartmentDefinitionInput),
		description: 'CompartmentDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a CompartmentDefinition record for deletion.'
	}
};

/**
 * @name exports.CompartmentDefinitionCreateMutation
 * @summary CompartmentDefinitionCreate Mutation.
 */
module.exports.CompartmentDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a CompartmentDefinition',
	resolve: scopeInvariant(scopeOptions, compartmentdefinitionCreateResolver),
	type: CompartmentDefinitionSchema
};

/**
 * @name exports.CompartmentDefinitionUpdateMutation
 * @summary CompartmentDefinitionUpdate Mutation.
 */
module.exports.CompartmentDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CompartmentDefinitions',
	resolve: scopeInvariant(scopeOptions, compartmentdefinitionUpdateResolver),
	type: CompartmentDefinitionSchema
};

/**
 * @name exports.CompartmentDefinitionDeleteMutation
 * @summary CompartmentDefinitionDelete Mutation.
 */
module.exports.CompartmentDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CompartmentDefinition',
	resolve: scopeInvariant(scopeOptions, compartmentdefinitionDeleteResolver),
	type: CompartmentDefinitionSchema
};
