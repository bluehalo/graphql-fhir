// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AllergyIntoleranceSchema = require('../../schemas/allergyintolerance.schema');

// Inputs
const AllergyIntoleranceInput = require('../../inputs/allergyintolerance.input');

// Resolvers
const {
	allergyintoleranceCreateResolver,
	allergyintoleranceUpdateResolver,
	allergyintoleranceDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'AllergyIntolerance',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a AllergyIntolerance record.'
	},
	resource: {
		type: new GraphQLNonNull(AllergyIntoleranceInput),
		description: 'AllergyIntolerance Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a AllergyIntolerance record for deletion.'
	}
};

/**
 * @name exports.AllergyIntoleranceCreateMutation
 * @summary AllergyIntoleranceCreate Mutation.
 */
module.exports.AllergyIntoleranceCreateMutation = {
	args: WriteArgs,
	description: 'Create a AllergyIntolerance',
	resolve: scopeInvariant(scopeOptions, allergyintoleranceCreateResolver),
	type: AllergyIntoleranceSchema
};

/**
 * @name exports.AllergyIntoleranceUpdateMutation
 * @summary AllergyIntoleranceUpdate Mutation.
 */
module.exports.AllergyIntoleranceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple AllergyIntolerances',
	resolve: scopeInvariant(scopeOptions, allergyintoleranceUpdateResolver),
	type: AllergyIntoleranceSchema
};

/**
 * @name exports.AllergyIntoleranceDeleteMutation
 * @summary AllergyIntoleranceDelete Mutation.
 */
module.exports.AllergyIntoleranceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single AllergyIntolerance',
	resolve: scopeInvariant(scopeOptions, allergyintoleranceDeleteResolver),
	type: AllergyIntoleranceSchema
};
