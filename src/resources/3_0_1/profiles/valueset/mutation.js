// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ValueSetSchema = require('../../schemas/valueset.schema');

// Inputs
const ValueSetInput = require('../../inputs/valueset.input');

// Resolvers
const {
	valuesetCreateResolver,
	valuesetUpdateResolver,
	valuesetDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ValueSet',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ValueSet record.'
	},
	resource: {
		type: new GraphQLNonNull(ValueSetInput),
		description: 'ValueSet Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ValueSet record for deletion.'
	}
};

/**
 * @name exports.ValueSetCreateMutation
 * @summary ValueSetCreate Mutation.
 */
module.exports.ValueSetCreateMutation = {
	args: WriteArgs,
	description: 'Create a ValueSet',
	resolve: scopeInvariant(scopeOptions, valuesetCreateResolver),
	type: ValueSetSchema
};

/**
 * @name exports.ValueSetUpdateMutation
 * @summary ValueSetUpdate Mutation.
 */
module.exports.ValueSetUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ValueSets',
	resolve: scopeInvariant(scopeOptions, valuesetUpdateResolver),
	type: ValueSetSchema
};

/**
 * @name exports.ValueSetDeleteMutation
 * @summary ValueSetDelete Mutation.
 */
module.exports.ValueSetDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ValueSet',
	resolve: scopeInvariant(scopeOptions, valuesetDeleteResolver),
	type: ValueSetSchema
};
