// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CapabilityStatementSchema = require('../../schemas/capabilitystatement.schema');

// Inputs
const CapabilityStatementInput = require('../../inputs/capabilitystatement.input');

// Resolvers
const {
	capabilitystatementCreateResolver,
	capabilitystatementUpdateResolver,
	capabilitystatementDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CapabilityStatement',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CapabilityStatement record.'
	},
	resource: {
		type: new GraphQLNonNull(CapabilityStatementInput),
		description: 'CapabilityStatement Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a CapabilityStatement record for deletion.'
	}
};

/**
 * @name exports.CapabilityStatementCreateMutation
 * @summary CapabilityStatementCreate Mutation.
 */
module.exports.CapabilityStatementCreateMutation = {
	args: WriteArgs,
	description: 'Create a CapabilityStatement',
	resolve: scopeInvariant(scopeOptions, capabilitystatementCreateResolver),
	type: CapabilityStatementSchema
};

/**
 * @name exports.CapabilityStatementUpdateMutation
 * @summary CapabilityStatementUpdate Mutation.
 */
module.exports.CapabilityStatementUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CapabilityStatements',
	resolve: scopeInvariant(scopeOptions, capabilitystatementUpdateResolver),
	type: CapabilityStatementSchema
};

/**
 * @name exports.CapabilityStatementDeleteMutation
 * @summary CapabilityStatementDelete Mutation.
 */
module.exports.CapabilityStatementDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CapabilityStatement',
	resolve: scopeInvariant(scopeOptions, capabilitystatementDeleteResolver),
	type: CapabilityStatementSchema
};
