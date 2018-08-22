// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const BodySiteSchema = require('../../schemas/bodysite.schema');

// Inputs
const BodySiteInput = require('../../inputs/bodysite.input');

// Resolvers
const {
	bodysiteCreateResolver,
	bodysiteUpdateResolver,
	bodysiteDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'BodySite',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a BodySite record.'
	},
	resource: {
		type: new GraphQLNonNull(BodySiteInput),
		description: 'BodySite Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a BodySite record for deletion.'
	}
};

/**
 * @name exports.BodySiteCreateMutation
 * @summary BodySiteCreate Mutation.
 */
module.exports.BodySiteCreateMutation = {
	args: WriteArgs,
	description: 'Create a BodySite',
	resolve: scopeInvariant(scopeOptions, bodysiteCreateResolver),
	type: BodySiteSchema
};

/**
 * @name exports.BodySiteUpdateMutation
 * @summary BodySiteUpdate Mutation.
 */
module.exports.BodySiteUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple BodySites',
	resolve: scopeInvariant(scopeOptions, bodysiteUpdateResolver),
	type: BodySiteSchema
};

/**
 * @name exports.BodySiteDeleteMutation
 * @summary BodySiteDelete Mutation.
 */
module.exports.BodySiteDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single BodySite',
	resolve: scopeInvariant(scopeOptions, bodysiteDeleteResolver),
	type: BodySiteSchema
};
