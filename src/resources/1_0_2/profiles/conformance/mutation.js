// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ConformanceSchema = require('../../schemas/conformance.schema');

// Inputs
const ConformanceInput = require('../../inputs/conformance.input');

// Resolvers
const {
	conformanceCreateResolver,
	conformanceUpdateResolver,
	conformanceDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Conformance',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Conformance record.'
	},
	resource: {
		type: new GraphQLNonNull(ConformanceInput),
		description: 'Conformance Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Conformance record for deletion.'
	}
};

/**
 * @name exports.ConformanceCreateMutation
 * @summary ConformanceCreate Mutation.
 */
module.exports.ConformanceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Conformance',
	resolve: scopeInvariant(scopeOptions, conformanceCreateResolver),
	type: ConformanceSchema
};

/**
 * @name exports.ConformanceUpdateMutation
 * @summary ConformanceUpdate Mutation.
 */
module.exports.ConformanceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Conformances',
	resolve: scopeInvariant(scopeOptions, conformanceUpdateResolver),
	type: ConformanceSchema
};

/**
 * @name exports.ConformanceDeleteMutation
 * @summary ConformanceDelete Mutation.
 */
module.exports.ConformanceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Conformance',
	resolve: scopeInvariant(scopeOptions, conformanceDeleteResolver),
	type: ConformanceSchema
};
