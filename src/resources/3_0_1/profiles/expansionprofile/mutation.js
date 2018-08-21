// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ExpansionProfileSchema = require('../../schemas/expansionprofile.schema');

// Inputs
const ExpansionProfileInput = require('../../inputs/expansionprofile.input');

// Resolvers
const {
	expansionprofileCreateResolver,
	expansionprofileUpdateResolver,
	expansionprofileDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ExpansionProfile',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ExpansionProfile record.'
	},
	resource: {
		type: new GraphQLNonNull(ExpansionProfileInput),
		description: 'ExpansionProfile Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ExpansionProfile record for deletion.'
	}
};

/**
 * @name exports.ExpansionProfileCreateMutation
 * @summary ExpansionProfileCreate Mutation.
 */
module.exports.ExpansionProfileCreateMutation = {
	args: WriteArgs,
	description: 'Create a ExpansionProfile',
	resolve: scopeInvariant(scopeOptions, expansionprofileCreateResolver),
	type: ExpansionProfileSchema
};

/**
 * @name exports.ExpansionProfileUpdateMutation
 * @summary ExpansionProfileUpdate Mutation.
 */
module.exports.ExpansionProfileUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ExpansionProfiles',
	resolve: scopeInvariant(scopeOptions, expansionprofileUpdateResolver),
	type: ExpansionProfileSchema
};

/**
 * @name exports.ExpansionProfileDeleteMutation
 * @summary ExpansionProfileDelete Mutation.
 */
module.exports.ExpansionProfileDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ExpansionProfile',
	resolve: scopeInvariant(scopeOptions, expansionprofileDeleteResolver),
	type: ExpansionProfileSchema
};
