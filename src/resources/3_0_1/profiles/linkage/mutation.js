// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const LinkageSchema = require('../../schemas/linkage.schema');

// Inputs
const LinkageInput = require('../../inputs/linkage.input');

// Resolvers
const {
	linkageCreateResolver,
	linkageUpdateResolver,
	linkageDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Linkage',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Linkage record.'
	},
	resource: {
		type: new GraphQLNonNull(LinkageInput),
		description: 'Linkage Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Linkage record for deletion.'
	}
};

/**
 * @name exports.LinkageCreateMutation
 * @summary LinkageCreate Mutation.
 */
module.exports.LinkageCreateMutation = {
	args: WriteArgs,
	description: 'Create a Linkage',
	resolve: scopeInvariant(scopeOptions, linkageCreateResolver),
	type: LinkageSchema
};

/**
 * @name exports.LinkageUpdateMutation
 * @summary LinkageUpdate Mutation.
 */
module.exports.LinkageUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Linkages',
	resolve: scopeInvariant(scopeOptions, linkageUpdateResolver),
	type: LinkageSchema
};

/**
 * @name exports.LinkageDeleteMutation
 * @summary LinkageDelete Mutation.
 */
module.exports.LinkageDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Linkage',
	resolve: scopeInvariant(scopeOptions, linkageDeleteResolver),
	type: LinkageSchema
};
