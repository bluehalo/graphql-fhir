// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const NamingSystemSchema = require('../../schemas/namingsystem.schema');

// Inputs
const NamingSystemInput = require('../../inputs/namingsystem.input');

// Resolvers
const {
	namingsystemCreateResolver,
	namingsystemUpdateResolver,
	namingsystemDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'NamingSystem',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a NamingSystem record.'
	},
	resource: {
		type: new GraphQLNonNull(NamingSystemInput),
		description: 'NamingSystem Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a NamingSystem record for deletion.'
	}
};

/**
 * @name exports.NamingSystemCreateMutation
 * @summary NamingSystemCreate Mutation.
 */
module.exports.NamingSystemCreateMutation = {
	args: WriteArgs,
	description: 'Create a NamingSystem',
	resolve: scopeInvariant(scopeOptions, namingsystemCreateResolver),
	type: NamingSystemSchema
};

/**
 * @name exports.NamingSystemUpdateMutation
 * @summary NamingSystemUpdate Mutation.
 */
module.exports.NamingSystemUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple NamingSystems',
	resolve: scopeInvariant(scopeOptions, namingsystemUpdateResolver),
	type: NamingSystemSchema
};

/**
 * @name exports.NamingSystemDeleteMutation
 * @summary NamingSystemDelete Mutation.
 */
module.exports.NamingSystemDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single NamingSystem',
	resolve: scopeInvariant(scopeOptions, namingsystemDeleteResolver),
	type: NamingSystemSchema
};
